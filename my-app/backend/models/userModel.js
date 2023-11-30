import mongoose from "mongoose";

// Schema for users

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isBroker: {
        type: Boolean,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
    },
    phoneNumber: {
        type: Number,
        unique: true,
    },
    licenseNumber: {
        type: Number,
        unique: true,
    },
    agency: {
        type: String,
    },
});

// userSchema.index({
//     firstName: "text",
//     lastName: "text",
//     email: "text",
//     agency: "text",
//     phone_number: "text",
// });

export const User = mongoose.model("User", userSchema);
