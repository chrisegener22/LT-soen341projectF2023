import { User } from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const userVerification = (req, res) => {
    const token = req.cookies.token;
    // Check if token exists
    if (!token) {
        return res.json({ message: "No token cookie" });
    }
    // Verify token
    jwt.verify(token, "123", async (err, data) => {
        // return if there is an error
        if (err) {
            return res.json({ message: err });
        } else {
            const user = await User.findById(data.id);
            // If user was found, return him
            if (user)
                return res.json({
                    isAdmin: user.isAdmin,
                    isBroker: user.isBroker,
                });
        }
    });
};
