import mongoose from "mongoose";

const offerSchema = mongoose.Schema({
    brokerID: {
        type: mongoose.Schema.Types.ObjectId,
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
        Type: String,
        required: true,
    },
    propertyID: {
        type: mongoose.Schema.Types.ObjectId,
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
