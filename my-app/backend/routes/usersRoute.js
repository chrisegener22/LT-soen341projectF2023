// Imports
import express from "express";
import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

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

        // Give token to user for authentication
        const token = jwt.sign(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                isBroker: user.isBroker,
                isAdmin: user.isAdmin,
            },
            "123"
        );
        return res.json({ status: "good", token: token });
        //catches any errors thrown
    } catch (err) {
        console.error(err.stack);
        res.status(123).send({ message: "User login failed." });
    }
});

// Save a property
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

export default router;
