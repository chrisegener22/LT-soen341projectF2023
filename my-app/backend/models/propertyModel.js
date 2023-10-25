import mongoose, { mongo } from "mongoose";

// Making a schema for properties
// Properties have a price, address and description

const propertySchema = mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    address: {
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
    },
    desc: {
        type: String,
        required: true,
    },
});

export const Property = mongoose.model("Property", propertySchema);
