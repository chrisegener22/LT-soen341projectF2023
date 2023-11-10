import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 84c4c23223206c413dd999334c49161ed344a8ba

export const BrokerDetails = () => {
    // storage for broker information
<<<<<<< HEAD

    
    const [broker, setBroker] = useState([]);
    const { id } = useParams();
    

=======
    const [broker, setBroker] = useState({});
    const { id } = useParams();
>>>>>>> 84c4c23223206c413dd999334c49161ed344a8ba
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
<<<<<<< HEAD
            <div className="flex justify-center border-2 border-black p-3 m-4 w-1/2 rounded-md gap-4">
                
=======
            <div className="flex items-center border-2 border-black p-3 m-4 w-1/2 rounded-md gap-4">
>>>>>>> 84c4c23223206c413dd999334c49161ed344a8ba
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-zinc-950">
                        Name: {broker.firstName} {broker.lastName}
                    </h1>
                    <h1 className="text-lg ">Phone: {broker.phoneNumber}</h1>
                    <h1 className="text-lg ">Email: {broker.email}</h1>
                    <h1 className="text-lg ">
<<<<<<< HEAD
                        Phone: {broker.phone}
                    </h1>
                    <h1 className="text-lg ">
                        Email: {broker.email}
                    </h1>
                    <h1 className="text-lg ">
                        Liscence Number: {broker.liscenceNumber}
                    </h1>
                    <h1 className="text-lg ">
                        Agency: {broker.agency}
=======
                        License Number: {broker.licenseNumber}
>>>>>>> 84c4c23223206c413dd999334c49161ed344a8ba
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
