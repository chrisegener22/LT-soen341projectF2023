// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Autocomplete, useJsApiLoader } from "@react-google-maps/api";

export const PropertyUpdate = () => {
    // Fields that need to be set
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [desc, setDesc] = useState("");
    const [imageURL, setImageURL] = useState("");
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries: ["places"],
    });

    const { id } = useParams();
    const navigate = useNavigate();

    // Method to get the property by id and set values to the original ones
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/properties/${id}`)
            .then((res) => {
                setPrice(res.data.price);
                setAddress(res.data.address);
                setDesc(res.data.desc);
                setImageURL(res.data.imageURL);
            })
            .catch((err) => console.log(err));
    }, [id]);

    // Function to handle updating the property
    const handleUpdateProperty = () => {
        // set data to send
        const data = {
            price,
            address,
            desc,
            imageURL,
        };

        // update data using axios
        axios
            .put(`http://localhost:8080/api/properties/${id}`, data)
            .then(() => {
                alert("Successfully updated property");
                navigate("/");
            })
            .catch((err) => {
                alert("Failed to update property");
                console.log(err);
            });
    };

    if (!isLoaded) {
        return (
            <div>
                <h1 className="text-3xl font-bold">Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold flex justify-center mt-4">
                Update Property Listing
            </h1>
            <div className="flex flex-col border-2 border-black my-4 w-1/2 p-6 mx-auto rounded-xl">
                <div className="my-4">
                    <label className="text-xl mr-4">Price</label>
                    <input
                        type="number"
                        min="1"
                        step="any"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border-2 px-1"
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Address</label>
                    <Autocomplete>
                        <input
                            type="text"
                            className="w-full border-2 px-1"
                            value={address}
                            onInput={(e) => setAddress(e.target.value)}
                            onBlur={(e) => setAddress(e.target.value)}
                        />
                    </Autocomplete>
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Description</label>
                    <textarea
                        className="w-full border-2 px-1"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <label className="text-xl mr-4">Image URL</label>
                    <input
                        type="text"
                        className="w-full border-2 px-1"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                </div>
                <div className="my-4 justify-center flex">
                    <button
                        className="text-white bg-green-400 w-3/5 p-4 rounded-full hover:bg-green-700"
                        onClick={handleUpdateProperty}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};
