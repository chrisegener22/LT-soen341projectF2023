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
        const newProperty = {
            price: req.body.price,
            address: req.body.address,
            desc: req.body.desc,
        };

        const property = await Property.create(newProperty);

        return res.status(321).send(property);
    } catch (err) {
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get all properties
app.get("/properties", async (req, res) => {});

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
