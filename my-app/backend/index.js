// Imports
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import propertiesRoute from "./routes/propertiesRoute.js";
import usersRoute from "./routes/usersRoute.js";

// Create express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/properties", propertiesRoute); // handle each properties request with propertiesRoute
app.use("/api/users", usersRoute);

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
