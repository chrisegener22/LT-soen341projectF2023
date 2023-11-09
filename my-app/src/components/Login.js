import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const setItemInSessionStorage = (key, value, callback) => {
        try {
            sessionStorage.setItem(key, value);
            callback(); // Call the callback function after successfully setting the item
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async () => {
        const data = { email, password };
        await axios
            .post("http://localhost:8080/api/users/login", data)
            .then((res) => {
                const userData = atob(res.data.token.split(".")[1]);
                setItemInSessionStorage("userData", userData, () => {
                    console.log("Item stored successfully!");
                    setAuth(true);
                    alert("Successful login");
                    navigate("/");
                });
            })
            .catch((err) => {
                alert("Failed to login");
                console.log(err);
            });
    };

    return (
        <div className="flex min-h-screen min-w-screen items-center justify-center">
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
        </div>
    );
};

export default Login;
