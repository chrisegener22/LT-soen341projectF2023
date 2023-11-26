import React, { useState } from "react";
import axios from "axios";

export const OfferCard = ({ offers }) => {
    const [property, setProperty] = useState(null);

    return (
        <div className="grid grid-cols-3 items-center">
            {offers.map((offer, index) => {
                axios
                    .get(
                        `http://localhost:8080/api/properties/${offer.propertyID}`
                    )
                    .then((res) => {
                        console.log(res);
                        setProperty(res.data);
                    })
                    .catch((err) => console.log(err));

                return (
                    <div
                        key={offer._id}
                        className="border-2 border-black rounded-xl relative p-4 m-4"
                    >
                        {" "}
                        <img
                            src={property?.imageURL}
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
                    </div>
                );
            })}
        </div>
    );
};
