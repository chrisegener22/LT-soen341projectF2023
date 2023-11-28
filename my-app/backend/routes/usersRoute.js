// Imports
import express from "express";
import { User } from "../models/userModel.js";

// Making router to handle requests
const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        //set new user from the data from the request
        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            isBroker: req.body.isBroker,
            isAdmin: req.body.isAdmin,
            phoneNumber: req.body.phoneNumber,
            licenseNumber: req.body.licenseNumber,
            agency: req.body.agency,
        };

        //create new user
        const user = await User.create(newUser);

        //send user
        return res.send(user);
    } catch (err) {
        //log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// User sign-in
router.post("/login", async (req, res) => {
    try {
        //takes in user email and password
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });

        //verfies that the email and password exist and that they match as well
        if (!user) {
            return res.status(401).send({ message: "User not found." });
        }
        if (user.password !== password) {
            return res.status(401).send({ message: "Invalid password." });
        }

        return res.json(user);
        //catches any errors thrown
    } catch (err) {
        console.error(err.stack);
        res.status(123).send({ message: "User login failed." });
    }
});

// Save a property visit date
router.post("/save-property", async (req, res) => {
    try {
        //save property id and tour with the user ID on the database
        const { userId, property_ID, tour_Date } = req.body;
        const property = await Property.create({
            userId,
            property_ID,
            tour_Date,
        });
        return res.send(property);
        //error catching
    } catch (err) {
        console.error(err.stack);
        res.status(123).send({ message: "Failed to save property." });
    }
});

// Delete a property visit date

router.post("/delete-property", async (req, res) => {
    try {
        const { userId, property_ID, tour_Date } = req.body;

        // Find and delete the property based on the provided criteria
        const deletedProperty = await Property.findOneAndDelete({
            userId,
            property_ID,
            tour_Date,
        });

        // Check if the property was found and deleted
        if (deletedProperty) {
            return res.send({ message: "Property deleted successfully." });
        } else {
            return res.status(404).send({ message: "Property not found." });
        }
    } catch (err) {
        console.error(err.stack);
        res.status(500).send({ message: "Failed to delete property." });
    }
});

// Change property visit date

router.post("/update-visit-date", async (req, res) => {
    try {
          const { userId, property_ID, newVisitDate } = req.body;

        // Find and update the property's visit date based on the provided criteria
        const updatedProperty = await Property.findOneAndUpdate(
            {
                userId,
                property_ID,
            },
            { $set: { tour_Date: newVisitDate } },
            { new: true }
        );

        // Check if the property was found and updated
        if (updatedProperty) {
            return res.send({ message: "Visit date updated successfully.", updatedProperty });
        } else {
            return res.status(404).send({ message: "Property not found." });
        }
    } catch (err) {
        console.error(err.stack);
        res.status(500).send({ message: "Failed to update visit date." });
    }
});

// Get brokers or search for one
router.get("/brokers", async (req, res) => {
    try {
        // If no queries, get all brokers
        if (Object.keys(req.query).length === 0) {
            const users = await User.find({
                isBroker: true,
                isAdmin: false,
            });

            // send to client
            return res.status(200).json({
                count: users.length,
                data: users,
            });
        } else {
            // Use query to find person
            const users = await User.find({
                isBroker: true,
                isAdmin: false,
                $text: {
                    $search: req.query.search,
                },
            });
            // send to client
            return res.status(200).json({
                count: users.length,
                data: users,
            });
        }
    } catch (err) {
        // Log error
        console.error(err.message);
        res.status(123).send({ message: err.message });
    }
});

// Delete user
router.delete("/:id", async (req, res) => {
    try {
        // get id from request param
        const { id } = req.params;

        // delete property
        const result = await User.findByIdAndDelete(id);

        // Check if it was deleted, return error message if it wasnt
        if (!result) {
            return res.status(123).json({ message: "No user with that ID" });
        }

        // Return success message
        return res.status(200).send({ message: "User deleted" });
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Update User
router.put("/:id", async (req, res) => {
    try {
        // Get id from request params
        const { id } = req.params;

        // set result
        const result = await User.findByIdAndUpdate(id, req.body);

        // If the book is not found, return error
        if (!result) {
            return res.status(123).json({ message: "No user with that ID" });
        }

        // Return success message
        return res.status(200).send({ message: "User updated" });
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get specific users by id
router.get("/:id", async (req, res) => {
    try {
        // Get id from request parameters
        const { id } = req.params;

        // get property with given id
        const user = await User.findById(id);

        // send properties to the client
        return res.status(200).json(user);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

export default router;
