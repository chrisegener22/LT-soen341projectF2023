import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Login = () => {
    const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = {
                email,
                password,
            };
            const response = await axios.post(
                "http://localhost:8080/api/users/login",
                data
            );
            const isAdmin = response?.data?.isAdmin;
            const isBroker = response?.data?.isBroker;
            const id = response?.data?._id;
            const loggedIn = true;
            setAuth({ isAdmin, isBroker, loggedIn, id });
            setSuccess(true);
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
            {success ? (
                <div className="flex-col max-w-md w-full">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold">
                            Successfully logged in!
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="flex-col max-w-md w-full">
                    <div>
                        <h2 className="text-center text-3xl font-extrabold">
                            Login
                        </h2>
                    </div>
                    <div className="flex-col mt-8">
                        <div>
                            <input
                                type="text"
                                required
                                className="w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500"
                                placeholder="email"
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
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
