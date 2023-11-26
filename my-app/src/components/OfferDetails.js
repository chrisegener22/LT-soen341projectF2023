import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const OfferDetails = () => {
    const { id } = useParams();
    const [offer, setOffer] = useState({});
    const [dosDate, setDosDate] = useState("");
    const [oopDate, setOopDate] = useState("");

    useEffect(() => {
        // get offer details
        axios
            .get(`http://localhost:8080/api/offers/${id}`)
            .then((res) => {
                setOffer(res.data);
                let date = new Date(res.data.dosDate);
                setDosDate(date.toLocaleDateString());
                date = new Date(res.data.oopDate);
                setOopDate(date.toLocaleDateString());
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-2/3 outline p-2">
                <h1 className="text-xl font-bold">Offer Details</h1>
                <h1 className="text-lg font-bold">Buyer Broker Information</h1>
                <h1 className="text-lg">
                    Name: {offer.buyerBrokerFirstName}{" "}
                    {offer.buyerBrokerLastName}
                    <br />
                    License Number: {offer.buyerBrokerLicenseNumber}
                    <br />
                    Agency: {offer.buyerBrokerAgency}
                </h1>
                <h1 className="text-lg font-bold">Buyer Information</h1>
                <h1 className="text-lg">
                    Name: {offer.buyerFirstName} {offer.buyerLastName}
                    <br />
                    Address: {offer.buyerAddress}
                    <br />
                    Email: {offer.buyerEmail}
                </h1>
                <h1 className="text-lg font-bold">Property Information</h1>
                <h1 className="text-lg">
                    Address:{" "}
                    {offer?.propertyID?.houseNumber +
                        ", " +
                        offer?.propertyID?.street +
                        "St, " +
                        offer?.propertyID?.city +
                        ", " +
                        offer?.propertyID?.province +
                        ", " +
                        offer?.propertyID?.postalCode}
                </h1>
                <h1 className="text-lg font-bold">Offer Information</h1>
                <h1 className="text-lg">
                    Offered Price: {offer.offeredPrice}
                    <br />
                    Deed of Sale Date: {dosDate}
                    <br />
                    Occupancy of Premises Date: {oopDate}
                </h1>
            </div>
        </div>
    );
};
