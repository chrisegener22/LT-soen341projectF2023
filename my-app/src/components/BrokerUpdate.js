// Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const BrokerUpdate = () => {
    // Fields that need to be set
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isBroker] = useState(true);
    const [isAdmin] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [licenseNumber, setLicenseNumber] = useState("");
    const [agency, setAgency] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    // get and set values to the field
    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/users/${id}`)
            .then((res) => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setPhoneNumber(res.data.phoneNumber);
                setLicenseNumber(res.data.licenseNumber);
                setAgency(res.data.agency);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleUpdateUser = () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            isBroker,
            isAdmin,
            phoneNumber,
            licenseNumber,
            agency,
        };

        // Send data
        axios
            .put(`http://localhost:8080/api/users/${id}`, data)
            .then(() => {
                alert("Successfully Updated");
                navigate("/Login");
            })
            .catch((err) => {
                alert("Failed to update");
                console.log(err);
            });
    };

    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
            <div className="flex-col max-w-md w-full">
                <div>
                    <h2 className="text-center text-3xl font-extrabold">
                        Update
                    </h2>
                </div>
                <div className="flex-col mt-8">
                    <div>
                        <label className="font-bold">First Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-bold">Last Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-bold">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-bold">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-bold">License Number</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="License Number"
                            value={licenseNumber}
                            onChange={(e) => setLicenseNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="font-bold">Agency</label>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Agency"
                            value={agency}
                            onChange={(e) => setAgency(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600"
                            onClick={() => {
                                handleUpdateUser();
                            }}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
