// Imports
import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

// Configure dotenv and create a mongodb client
dotenv.config();
const MongoClient = mongodb.MongoClient;

// Set server port
// Conenct to 8000 if 5000 is unavailable
const port = process.env.PORT || 8000;

// Connect to db
MongoClient.connect(process.env.PROPERTY_DB_URI, {
    maxPoolSize: 50, // Max amount of connections is 50 at a time
    waitQueueTimeoutMS: 500, // Timeout after 500 ms
})
    // Catch error and exit process once logged
    .catch((err) => {
        console.error(err.stack);
        process.exit(1);
    })
    // If there is no error, connect to port
    .then(async (client) => {
        app.listen(port, () => {
            console.log(
                `Connected to db succesfully\nListening on port ${port}`
            );
        });
    });
