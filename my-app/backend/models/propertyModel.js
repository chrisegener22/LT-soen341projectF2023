import mongoose, { mongo } from "mongoose";

// Making a schema for properties
// Properties have a price, address, description and image

const propertySchema = mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    houseNumber: {
        type: Number,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    province: {
        type: String,
        required: true,
        maxLength: 2, // Only use abbreviations for provinces
    },
    postalCode: {
        type: String,
        required: true,
        maxLength: 6, // Canadian postal codes
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
});

export const Property = mongoose.model("Property", propertySchema);
