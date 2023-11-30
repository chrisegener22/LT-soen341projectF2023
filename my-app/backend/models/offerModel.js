import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
    brokerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    buyerBrokerFirstName: {
        type: String,
        required: true,
    },
    buyerBrokerLastName: {
        type: String,
        required: true,
    },
    buyerBrokerLicenseNumber: {
        type: Number,
        required: true,
    },
    buyerBrokerAgency: {
        type: String,
        required: true,
    },
    buyerFirstName: {
        type: String,
        required: true,
    },
    buyerLastName: {
        type: String,
        required: true,
    },
    buyerAddress: {
        type: String,
        required: true,
    },
    buyerEmail: {
        type: String,
        required: true,
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Property",
    },
    offeredPrice: {
        type: Number,
        required: true,
    },
    dosDate: {
        type: Date,
        required: true,
    },
    oopDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
});

export const Offer = mongoose.model("Offer", offerSchema);
