// Imports
import express from "express";
import { User } from "../models/userModel.js";

// Making router to handle requests
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        //set new user from the data from the request
        const newUser = {
            username: req.body.username,
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


export default router;