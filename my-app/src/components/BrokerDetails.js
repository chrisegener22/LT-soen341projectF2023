import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";


export const BrokerDetails = () => {


    // storage for broker information

    const [broker, setBroker] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [liscenceNumber, setLiscenceNumber] = useState("");
    const [agency, setAgency] = useState("");
    const [imageURL, setImageURL] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const { auth, user } = useAuth();


    // Method to get the broker by id
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/brokers/${id}`)
            .then((res) => {
               setBroker(res.data);

            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return(
        <div className="flex justify-center">
            <div className="flex items-center border-2 border-black p-3 m-4 w-1/2 rounded-md gap-4">
                <img
                    src="broker.imageURL"
                    alt="Broker"
                    className="w-60 h-60 float-left"
                />
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-zinc-950">
                        Name: {firstName} {lastName}
                    </h1>
                    <h1 className="text-lg ">
                        Phone: {phone}
                    </h1>
                    <h1 className="text-lg ">
                        Email: {email}
                    </h1>
                    <h1 className="text-lg ">
                        Liscence Number: {liscenceNumber}
                    </h1>
                    <h1 className="text-lg ">
                        Agency: {agency}
                    </h1>

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

    )

};
export default BrokerDetails;

