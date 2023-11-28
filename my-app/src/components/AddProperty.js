// Imports
import React, { useState } from "react";
import axios from "axios";

export const AddProperty = () => {
    // Fields that need to be set
    const [price, setPrice] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [desc, setDesc] = useState("");
    const [imageURL, setImageURL] = useState("");

    // Function to handle saving the property
    const handleSaveProperty = () => {
        // set data to send
        const data = {
            price,
            houseNumber,
            street,
            city,
            province,
            postalCode,
            desc,
            imageURL,
        };

        // Send data using axios
        axios
            .post("http://localhost:8080/api/properties", data)
            .then(() => {
                alert("Successfully added property");
            })
            .catch((err) => {
                alert("Failed to save property");
                console.log(err);
            });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold flex justify-center mt-4">
                Create Property Listing
            </h1>
            <div className="flex flex-col border-2 border-black my-4 w-1/2 p-6 mx-auto rounded-xl">
                <div className="my-4">
                    <label className="text-xl mr-4">Price</label>
                    <input
                        type="number"
                        min="1"
                        step="any"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border-2 px-1"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">House Number</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setHouseNumber(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Street</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setStreet(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">City</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Province</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setProvince(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Postal Code</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setPostalCode(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Description</label>
                    <textarea
                        className="w-full border-2 px-1"
                        onChange={(e) => setDesc(e.target.value)}
                        placeholder="Add Description..."
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Image URL</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </div>
                <div className="my-4 justify-center flex">
                    <button
                        className="text-white bg-green-400 w-3/5 p-4 rounded-full hover:bg-green-700"
                        onClick={handleSaveProperty}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
