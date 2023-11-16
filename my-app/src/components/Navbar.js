import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="bg-red-500 text-white flex justify-between items-stretch gap-10 px-4">
            {/* LOGO */}
            <Link to="/" className="text-4xl font-bold">
                LT Real Estate
            </Link>
            {/* Nav bar item that are going to be on the right side */}
            <ul className="p-0 m-0 text-lg font-semibold list-none flex gap-4">
                <li className="hover:bg-red-900">
                    <Link
                        to="/Brokers"
                        className="h-full flex items-center p-2"
                    >
                        Brokers
                    </Link>
                </li>
                {1 == 1 ? (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/AddProperty"
                            className="h-full flex items-center p-2"
                        >
                            Add Property
                        </Link>
                    </li>
                ) : null}
                {1 == 1 ? null : (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Login"
                            className="h-full flex items-center p-2"
                        >
                            Login
                        </Link>
                    </li>
                )}
                {1 == 1 ? null : (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Register"
                            className="h-full flex items-center p-2"
                        >
                            Register
                        </Link>
                    </li>
                )}
                {1 == 1 ? null : (
                    <li className="hover:bg-red-900">
                        <button className="h-full flex items-center p-2">
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
