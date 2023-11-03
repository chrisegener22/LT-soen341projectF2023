import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { OfferForm } from "./OfferForm";
import { Link } from "react-router-dom";

export const PropertyDetails = () => {
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
        navigate(`/properties/details/${id}/offer-form`);
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
                        Address: {property.houseNumber} {property.street} St,{" "}
                        {property.city}, {property.province},{" "}
                        {property.postalCode}
                    </h1>
                    <h1 className="text-xl">Description: {property.desc}</h1>

                    <button
                        onClick={handleOfferForm}
                        className="bg-blue-400 rounded-full w-1/5 h-10"
                        title="Submit Offer"
                    >
                        Make an Offer
                    </button>
                </div>
            </div>
        </div>
    );
};