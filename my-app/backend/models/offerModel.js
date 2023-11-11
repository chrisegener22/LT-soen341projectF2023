import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
    brokerID: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    buyerName: {
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
        type: mongoose.Types.ObjectId,
        required: true,
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
});

export const Offer = mongoose.model("Offer", offerSchema);
