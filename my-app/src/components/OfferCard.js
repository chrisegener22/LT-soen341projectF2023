import React from "react";
import { Link } from "react-router-dom";

export const OfferCard = ({ offers }) => {
    return (
        <div className="grid grid-cols-3 items-center">
            {offers.map((offer, index) => (
                <div
                    key={offer._id}
                    className="border-2 border-black rounded-xl relative p-4 m-4"
                >
                    <img
                        src={offer.propertyID.imageURL}
                        alt="Some house"
                        className="h-48 w-48 float-left mx-5"
                    />
                    <h1 className="text-lg">
                        Buyer: {offer.buyerFirstName} {offer.buyerLastName}
                        <br />
                        Buyer Broker: {offer.buyerBrokerFirstName}{" "}
                        {offer.buyerBrokerLastName}
                        <br />
                        Buyer Broker License Number:{" "}
                        {offer.buyerBrokerLicenseNumber}
                        <br />
                        Offered Price: ${offer.offeredPrice}
                    </h1>
                    <Link title="Details" to={`/offers/details/${offer._id}`}>
                        <button className="bg-gray-600 rounded-lg p-2 mx-3 text-white">
                            Details
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};
