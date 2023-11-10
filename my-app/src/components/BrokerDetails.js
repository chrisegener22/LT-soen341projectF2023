import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const BrokerDetails = () => {
    // storage for broker information
    const [broker, setBroker] = useState({});
    const { id } = useParams();
    // Method to get the broker by id
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/users/${id}`)
            .then((res) => {
                setBroker(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="flex justify-center">
            <div className="flex items-center border-2 border-black p-3 m-4 w-1/2 rounded-md gap-4">
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-zinc-950">
                        Name: {broker.firstName} {broker.lastName}
                    </h1>
                    <h1 className="text-lg ">Phone: {broker.phoneNumber}</h1>
                    <h1 className="text-lg ">Email: {broker.email}</h1>
                    <h1 className="text-lg ">
                        License Number: {broker.licenseNumber}
                    </h1>
                    <h1 className="text-lg ">Agency: {broker.agency}</h1>

                    <div>
                        <button
                            className="bg-slate-400 rounded-md py-2 w-32 text-white text-sm font-medium my-3"
                            title="Contact Broker"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BrokerDetails;
