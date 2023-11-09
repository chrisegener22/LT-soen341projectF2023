import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    // Fields that need to be set
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isBroker, setIsBroker] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleRegisterNonBroker = () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            isBroker,
            isAdmin,
        };

        // Send data
        axios
            .post("http://localhost:8080/api/users/register", data)
            .then(() => {
                alert("Successfully registered");
                navigate("/Login");
            })
            .catch((err) => {
                alert("Failed to register");
                console.log(err);
            });
    };

    const handleRegisterBroker = () => {
        const data = {
            firstName,
            lastName,
            email,
            password,
            isBroker,
            isAdmin,
        };

        // Send data
        axios
            .post("http://localhost:8080/api/users/register", data)
            .then(() => {
                alert("Successfully registered");
                navigate("/");
            })
            .catch((err) => {
                alert("Failed to register");
                console.log(err);
            });
    };

    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
            <div className="flex-col max-w-md w-full">
                <div>
                    <h2 className="text-center text-3xl font-extrabold">
                        Register
                    </h2>
                </div>
                <div className="flex-col mt-8">
                    <div>
                        <input
                            type="text"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <input
                                type="text"
                                required
                                className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <input
                            type="email"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            required
                            className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button
                            className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600"
                            onClick={() => {
                                setIsBroker(false);
                                setIsAdmin(false);
                                handleRegisterNonBroker();
                            }}
                        >
                            Register
                        </button>
                        <button
                            className="flex w-full mt-6 justify-center py-3 px-4 text-sm font-medium rounded-md text-white bg-blue-600"
                            onClick={() => {
                                setIsBroker(true);
                                setIsAdmin(false);
                                handleRegisterBroker();
                            }}
                        >
                            Register as Broker
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
