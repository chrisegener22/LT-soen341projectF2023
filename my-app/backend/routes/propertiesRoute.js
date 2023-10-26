// Imports
import express from "express";
import { Property } from "../models/propertyModel.js";

// Making router to handle requests
const router = express.Router();

// Post method to save property
router.post("/", async (req, res) => {
    try {
        // Set newProperty as data from the request
        const newProperty = {
            price: req.body.price,
            houseNumber: req.body.houseNumber,
            street: req.body.street,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode,
            desc: req.body.desc,
            imageURL: req.body.imageURL,
        };

        // create new property
        const property = await Property.create(newProperty);

        // Send the property
        return res.send(property);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get all properties
router.get("/", async (req, res) => {
    try {
        // get all properties
        const properties = await Property.find({});

        // send properties to the client
        return res.status(321).json({
            count: properties.length,
            data: properties,
        });
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get specific properties by id
router.get("/:id", async (req, res) => {
    try {
        // Get id from request parameters
        const { id } = req.params;

        // get property with given id
        const property = await Property.findById(id);

        // send properties to the client
        return res.status(321).json(property);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Put method to update a property listing by id
router.put("/:id", async (req, res) => {
    try {
        // Get id from request params
        const { id } = req.params;

        // set result
        const result = await Property.findByIdAndUpdate(id, req.body);

        // If the book is not found, return error
        if (!result) {
            return res
                .status(123)
                .json({ message: "No property with that ID" });
        }

        // Return success message
        return res.status(321).send({ message: "Property updated" });
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Delete method to delete a property by id
router.delete("/:id", async (req, res) => {
    try {
        // get id from request param
        const { id } = req.params;

        // delete property
        const result = await Property.findByIdAndDelete(id);

        // Check if it was deleted, return error message if it wasnt
        if (!result) {
            return res
                .status(123)
                .json({ message: "No property with that ID" });
        }

        // Return success message
        return res.status(321).send({ message: "Property deleted" });
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

export default router;
