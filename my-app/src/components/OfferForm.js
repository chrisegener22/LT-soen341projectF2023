import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

export const OfferForm = () => {
    // storage for property and id
    const [property, setProperty] = useState({});
    const { id } = useParams();
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const brokerID = auth?.id;
    const [buyerBrokerFirstName, setBuyerBrokerFirstName] = useState("");
    const [buyerBrokerLastName, setBuyerBrokerLastName] = useState("");
    const [buyerBrokerLicenseNumber, setBuyerBrokerLicenseNumber] =
        useState("");
    const [buyerBrokerAgency, setBuyerBrokerAgency] = useState("");
    const [buyerFirstName, setBuyerFirstName] = useState("");
    const [buyerLastName, setBuyerLastName] = useState("");
    const [buyerAddress, setBuyerAddress] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const propertyID = id;
    const [offeredPrice, setOfferedPrice] = useState("");
    const [dosDate, setDosDate] = useState("");
    const [oopDate, setOopDate] = useState("");
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

    const handleSubmit = () => {
        const data = {
            brokerID,
            buyerBrokerFirstName,
            buyerBrokerLastName,
            buyerBrokerLicenseNumber,
            buyerBrokerAgency,
            buyerFirstName,
            buyerLastName,
            buyerAddress,
            buyerEmail,
            propertyID,
            offeredPrice,
            dosDate,
            oopDate,
        };
        console.log(data);
        // Send data
        axios
            .post("http://localhost:8080/api/offers/", data)
            .then(() => {
                alert("Successfully made offer");
                navigate(`/properties/details/${id}`);
            })
            .catch((err) => {
                alert("Failed to make offer");
                console.log(err);
            });
    };

    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-full">
                <div>
                    <label
                        className="block text-gray-700 text-3xl font-bold mb-2"
                        htmlFor="date"
                    >
                        Buy Offer
                    </label>
                </div>
                <form className="flex-col mt-8" onSubmit={handleSubmit}>
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        Buyer Broker Information
                    </label>
                    <div>
                        <input
                            id="first-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="First Name"
                            onChange={(e) =>
                                setBuyerBrokerFirstName(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <input
                            id="last-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Last Name"
                            onChange={(e) =>
                                setBuyerBrokerLastName(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <input
                            id="license-number"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="License Number"
                            onChange={(e) =>
                                setBuyerBrokerLicenseNumber(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <input
                            id="Agency"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Agency"
                            onChange={(e) =>
                                setBuyerBrokerAgency(e.target.value)
                            }
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
                            onChange={(e) => setBuyerFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="last-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Last Name"
                            onChange={(e) => setBuyerLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="you@example.com"
                            onChange={(e) => setBuyerEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            id="address"
                            type="tel"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Address"
                            onChange={(e) => setBuyerAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="date"
                        >
                            Property Address
                        </label>
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
                            onChange={(e) => setOfferedPrice(e.target.value)}
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
                            onChange={(e) => setDosDate(e.target.value)}
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
                            onChange={(e) => setOopDate(e.target.value)}
                        />
                    </div>
                    <button
                        className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OfferForm;
