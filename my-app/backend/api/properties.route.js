// Imports
import express from "express";

// Create router from express
const router = express.Router();

// Test route
router.route("/").get((req, res) => res.send("success"));

export default router;
