// imports
import express from "express";
import cors from "cors";

// Make express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to the api in order to be used
app.use("/api/properties", properties);

// If route is invalid, response is an error
app.use("*", (req, res) => res.status(404).json({ error: "Not found" }));

export default app;
