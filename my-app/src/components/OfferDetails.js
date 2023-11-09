import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OfferDetails = () => {
    const { propertyId, offerId } = useParams();
    const [property, setProperty] = useState({});
    const [offer, setOffer] = useState({});

    useEffect(() => {
        // get property details
        axios.get(`http://localhost:8080/api/properties/${propertyId}`)
            .then((res) => {
                setProperty(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        // get offer details
        axios.get(`http://localhost:8080/api/properties/${propertyId}/offers/${offerId}`)
            .then((res) => {
                setOffer(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [propertyId, offerId]);

    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-full">
                <div>
                    <label
                        className="block text-gray-700 text-3xl font-bold mb-2"
                        htmlFor="date"
                    >
                        Offer Details
                    </label>
                </div>
                <form className="flex-col mt-8">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="date"
                    >
                        Broker information
                    </label>
                    <div>
                        <input
                            id="broker-name"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.brokerName}
                            placeholder="Broker's Name"
                        />
                    </div>
                    <div>
                        <input
                            id="broker-license-number"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.brokerLicense}
                            placeholder="Broker's License Number"
                        />
                    </div>
                    <div>
                        <input
                            id="broker-agency"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.brokerAgency}
                            placeholder="Broker's Agency"
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
                            id="buyer-name"
                            type="text"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.buyerName}
                            placeholder="Buyer's Name"
                        />
                    </div>
                    <div>
                        <input
                            id="buyer-email"
                            type="email"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.buyerEmail}
                            placeholder="Buyer's Email"
                        />
                    </div>
                    <div>
                        <input
                            id="buyer-address"
                            type="tel"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.buyerAddress}
                            placeholder="Buyer's Address"
                        />
                    </div>
                    <div>
                        <input
                            id="property"
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
                            className="w-full px-3 py-2 my-2"
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
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.price}
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
                            id="sale-date"
                            type="date"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.saleDate}
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
                            id="occupancy-date"
                            type="date"
                            disabled
                            className="w-full px-3 py-2 my-2"
                            value={offer.occupancyDate}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default OfferDetails;