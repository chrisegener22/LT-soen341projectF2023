// Imports
import express from "express";
import { Offer } from "../models/offerModel.js";

// Making router to handle requests
const router = express.Router();

// Post method to save offer
router.post("/", async (req, res) => {
    try {
        // Set newProperty as data from the request
        const newOffer = req.body;

        // create new property
        const offer = await Offer.create(newOffer);

        // Send the property
        return res.send(offer);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get all offers
router.get("/", async (req, res) => {
    try {
        // get all offers
        const offers = await Offer.find({});

        // send offers to the client
        return res.status(200).json({
            count: offers.length,
            data: offers,
        });
    } catch (err) {
        // Log error
        console.error(err.message);
        res.status(123).send({ message: err.message });
    }
});

// Get method to get specific offer by id
router.get("/:id", async (req, res) => {
    try {
        // Get id from request parameters
        const { id } = req.params;

        // get offer with given id
        const offer = await Offer.findById(id);

        // send offer to the client
        return res.status(200).json(offer);
    } catch (err) {
        // Log error
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});

// Get offer by broker id
router.get("/brokerid/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await Offer.find({
            brokerID: id,
        }).populate("propertyID");

        // send to client
        return res.status(200).json({
            count: offers.length,
            data: offers,
        });
    } catch (err) {
        // Log error
        console.error(err.message);
        res.status(123).send({ message: err.message });
    }
});

// Get offer by property id
router.get("/propertyid/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const offers = await Offer.find({
            propertyID: id,
        });

        // send to client
        return res.status(200).json({
            count: offers.length,
            data: offers,
        });
    } catch (err) {
        // Log error
        console.error(err.message);
        res.status(123).send({ message: err.message });
    }
});

export default router;
