import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Navbar = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
        setAuth({});
    };

    return (
        <nav className="bg-red-500 text-white flex justify-between items-stretch gap-10 px-4">
            {/* LOGO */}
            <Link to="/" className="text-4xl font-bold">
                LT Real Estate
            </Link>
            {/* Nav bar item that are going to be on the right side */}
            <ul className="p-0 m-0 text-lg font-semibold list-none flex gap-4">
                <li className="hover:bg-red-900">
                    <Link to="/Map" className="h-full flex items-center p-2">
                        Map
                    </Link>
                </li>
                {auth?.loggedIn && !auth?.isBroker && !auth?.isAdmin ? (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/mortgage-calculator"
                            className="h-full flex items-center p-2"
                        >
                            Mortgate Calculator
                        </Link>
                    </li>
                ) : null}
                {auth?.isBroker ? (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Offers"
                            className="h-full flex items-center p-2"
                        >
                            Manage Offers
                        </Link>
                    </li>
                ) : null}
                {auth?.loggedIn ? (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Brokers"
                            className="h-full flex items-center p-2"
                        >
                            Brokers
                        </Link>
                    </li>
                ) : null}
                {auth?.isBroker ? (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/AddProperty"
                            className="h-full flex items-center p-2"
                        >
                            Add Property
                        </Link>
                    </li>
                ) : null}
                {auth?.loggedIn ? null : (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Login"
                            className="h-full flex items-center p-2"
                        >
                            Login
                        </Link>
                    </li>
                )}
                {auth?.loggedIn ? null : (
                    <li className="hover:bg-red-900">
                        <Link
                            to="/Register"
                            className="h-full flex items-center p-2"
                        >
                            Register
                        </Link>
                    </li>
                )}
                {!auth?.loggedIn ? null : (
                    <li className="hover:bg-red-900">
                        <button
                            className="h-full flex items-center p-2"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
