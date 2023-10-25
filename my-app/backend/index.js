// Imports
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import propertiesRoute from "./routes/propertiesRoute.js";

// Create express app
const app = express();

// Middleware
app.use(express.json());
app.use("/properties", propertiesRoute); // handle each properties request with propertiesRoute

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
