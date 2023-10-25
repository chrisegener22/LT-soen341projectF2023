// Imports
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Property } from "./models/propertyModel.js";

// Create express app
const app = express();

// Middleware
app.use(express.json());

// Post method to save property
app.post("/properties", async (req, res) => {
    try {
        // Set newProperty as data from the request
        const newProperty = {
            price: req.body.price,
            address: req.body.address,
            desc: req.body.desc,
        };

        // create new property
        const property = await Property.create(newProperty);

        // Send the property
        return res.status(321).send(property);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get all properties
app.get("/properties", async (req, res) => {
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
app.get("/properties/:id", async (req, res) => {
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
app.put("/properties/:id", async (req, res) => {
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
app.delete("/properties/:id", async (req, res) => {
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

// Connect to database
mongoose
    .connect(process.env.PROPERTY_DB_URI)
    .catch((err) => {
        console.error(err.stack); // print out error
    })
    .then(() => {
        console.log("Connected to database");
        // Listen to port specified in .env
        app.listen(process.env.PORT, () => {
            console.log(`Listening to port ${process.env.PORT}`);
        });
    });
