import mongoose from "mongoose";

// Making a schema for brokers
// Brokers have a first name, last name, phone number, email, liscence number, agency and image

const brokerSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
        maxLength: 10,
    },
    email: {
        type: String,
        required: true,
    },
    liscenceNumber: {
        type: String,
        required: true,
    },
    agency: {
        type: String,
        required: true,
    },
    imageURL: {
        // Link to image of broker to be displayed on cards
        type: String,
        required: true,
    },
});

brokerSchema.index({
    firstName: "text",
    lastName: "text",
    email: "text",
    liscenceNumber: "text",
    agency: "text",
});

export const Broker = mongoose.model("Broker", brokerSchema);
