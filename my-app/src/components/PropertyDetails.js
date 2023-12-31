import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

export const PropertyDetails = () => {
    const { auth } = useContext(AuthContext);
    // storage for property and id
    const [property, setProperty] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    // Method to get the property by id
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/properties/${id}`)
            .then((res) => {
                setProperty(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    //Method to navigate to the offer form
    const handleOfferForm = () => {
        navigate(`/properties/details/offer_form/${id}`);
    };

    return (
        <div className="flex justify-center">
            <div className="flex items-center border-2 border-black p-4 m-4 w-1/2 rounded-xl gap-4">
                <img
                    src={property.imageURL}
                    alt="House"
                    className="w-60 h-60 float-left"
                />
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-green-800">
                        ${property.price}
                    </h1>
                    <h1 className="text-xl font-semibold">
                        Address: {property.address}
                    </h1>
                    <h1 className="text-xl">Description: {property.desc}</h1>
                    {auth?.isBroker ? (
                        <button
                            onClick={handleOfferForm}
                            className="bg-blue-600 rounded-md py-2 mx-8 w-32 text-white text-sm font-medium mb-2 place-self-center"
                            title="Submit Offer"
                        >
                            Make an Offer
                        </button>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
