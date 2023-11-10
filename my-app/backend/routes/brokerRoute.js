import { Express } from "express";
import { BrokerController } from "../models/brokerModel";

const router = Express.Router();

// Method to save broker

router.post("/", async (req, res) => {
    try {
        const newBroker = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            liscenceNumber: req.body.liscenceNumber,
            agency: req.body.agency,
            imageURL: req.body.imageURL,
        };

        const broker = await BrokerController.create(newBroker);

        return res.send(broker);
    } catch (err) {
        console.error(err.stack);
        res.status(123).send({ message: err.message });
    }
});


