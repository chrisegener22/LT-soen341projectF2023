import mongoose from "mongoose";

// Making a schema for properties
// Properties have a price, address, description and image

const propertySchema = mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imageURL: {
        // Link to image of property to be displayed on cards
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
    },
});

export const Property = mongoose.model("Property", propertySchema);
