import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export const OfferForm = () => {
    // storage for property and id
    const [property, setProperty] = useState({});
    const [broker, setBroker] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
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

        axios
            .get(`http://localhost:8080/api/users/${user.id}`)
            .then((res) => {
                setBroker(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id, user]);

    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-full">
                <div>
                    <label
                        className="block text-gray-700 text-3xl font-bold mb-2"
                        htmlFor="date"
                    >
                        Email Broker
                    </label>
                </div>
                <form className="flex-col mt-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        Your information
                    </label>
                    <div>
                        <input
                            id="first-name"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            value={broker.firstName}
                        />
                    </div>
                    <div>
                        <input
                            id="last-name"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            value={broker.lastName}
                        />
                    </div>
                    <div>
                        <input
                            id="license-number"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            value={broker.licenseNumber}
                        />
                    </div>
                    <div>
                        <input
                            id="Agency"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            value={broker.agency}
                        />
                    </div>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        Buyer information
                    </label>
                    <div>
                        <input
                            id="first-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <input
                            id="last-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <input
                            id="address"
                            type="tel"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Address"
                        />
                    </div>
                    <div>
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

                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="date"
                        >
                            Offered price
                        </label>
                        <input
                            id="price"
                            type="number"
                            min="1"
                            step="any"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                        ></input>
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="date"
                        >
                            Deed of sale date
                        </label>
                        <input
                            id="date"
                            type="date"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="date"
                        >
                            Occupancy of premises date
                        </label>
                        <input
                            id="date"
                            type="date"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                        />
                    </div>
                </form>

                <button className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default OfferForm;
