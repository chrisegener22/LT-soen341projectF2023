import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OfferManagement = () => {
    const { id } = useParams();
    const [property, setProperty] = useState({});
    const [offers, setOffers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // get property details
        axios.get(`http://localhost:8080/api/properties/${id}`)
            .then((res) => {
                setProperty(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // get offers
        axios.get(`http://localhost:8080/api/properties/${id}/offers`)
            .then((res) => {
                setOffers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // sample offers
        setOffers([
            {
                _id: "dsfasdfa",
                buyer: "asdfl",
                price: 12000,
            },
            {
                _id: "agwda",
                buyer: "alwuwib",
                price: 10000,
            },
            {
                _id: "agwfaw",
                buyer: "awer",
                price: 11000,
            },
            {
                _id: "agwfaw",
                buyer: "awer",
                price: 11000,
            },
            {
                _id: "agwfaw",
                buyer: "awer",
                price: 11000,
            },
            {
                _id: "agwfaw",
                buyer: "awer",
                price: 11000,
            },
            {
                _id: "agwfaw",
                buyer: "awer",
                price: 11000,
            },
        ])
    }, [id]);

    const onOfferClick = (propertyId, offerId) => {
        navigate(`/properties/offers/${propertyId}/offer-details/${offerId}`);
    }

    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-full">
                <form className="flex-col mt-8">
                    <label
                        className="block text-gray-700 text-3xl font-bold mb-2"
                        htmlFor="date"
                    >
                        Property
                    </label>
                    <div className="flex-col items-center justify-center w-full gap-4">
                        <div className="flex items-center justify-center">
                            <img
                                src={property.imageURL}
                                alt="House"
                                className="w-60 h-60"
                            />
                        </div>
                        <input
                            id="address"
                            type="text"
                            value={
                                property.houseNumber +
                                ", " +
                                property.street +
                                "St, " +
                                property.city +
                                ", " +
                                property.province +
                                ", " +
                                property.postalCode
                            }
                            disabled
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                        />
                    </div>
                </form>
                <form className="flex-col mt-8 h-[75.0vh]">
                    <label
                        className="block text-gray-700 text-3xl font-bold mb-2"
                        htmlFor="date"
                    >
                        Offers
                    </label>
                    <div className="flex-col items-center justify-center w-full h-1/2 overflow-y-auto">
                        {offers.map((offer, _) => (
                            <div
                                key={offer._id}
                                className="flex border border-black rounded my-6"
                            >
                            <div className="flex-col">
                                <input
                                    id="buyerName"
                                    type="text"
                                    value={"" + offer.buyer}
                                    disabled
                                    className="font-bold w-full px-3 py-2 border-0"
                                />
                                <input
                                    id="offeredPrice"
                                    type="text"
                                    value={"Offered " + offer.price}
                                    disabled
                                    className="w-full px-3 py-2 border-0"
                                />
                            </div>
                            <div className="flex w-full justify-end">
                                <button
                                    onClick={() => onOfferClick(id, offer._id)}
                                    className="bg-blue-600 rounded-md py-2 m-2 w-32 text-white text-sm font-medium place-self-center"
                                    title="Submit Offer"
                                >
                                    View details
                                </button>
                            </div>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OfferManagement;