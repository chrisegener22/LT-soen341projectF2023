import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-red-500 text-white flex justify-between items-stretch gap-10 px-4">
            <Link to="/" className="text-4xl font-bold">
                LT Real Estate
            </Link>
            <ul className="p-0 m-0 text-lg font-semibold list-none flex gap-4">
                <li className="hover:bg-red-900">
                    <Link
                        to="/AddProperty"
                        className="h-full flex items-center p-2"
                    >
                        Add Property
                    </Link>
                </li>
                <li className="hover:bg-red-900">
                    <Link to="/" className="h-full flex items-center p-2">
                        Login
                    </Link>
                </li>
                <li className="hover:bg-red-900">
                    <Link to="/Register" className="h-full flex items-center p-2">
                        Register
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
