import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch, AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import AuthContext from "../context/AuthProvider";

export const PropertyCard = ({ properties }) => {
    const { auth } = useContext(AuthContext);
    return (
        <div className="grid grid-cols-3 items-center">
            {properties.map((property, index) =>
                property?.status === "sold" ? null : (
                    <div
                        key={property._id}
                        className="border-2 border-black rounded-xl relative p-4 m-4"
                    >
                        <img
                            src={property.imageURL}
                            alt="House"
                            className="h-48 w-48 float-left mx-5"
                        />
                        <h1 className="text-lg font-bold text-green-800">
                            ${property.price}
                        </h1>
                        <div className="text-lg">
                            <h1>Address: {property.address}</h1>
                        </div>
                        <div className="flex flex-row justify-around">
                            <Link
                                to={`/properties/details/${property._id}`}
                                className="text-4xl"
                                title="Details"
                            >
                                <AiOutlineFileSearch />
                            </Link>
                            {auth?.isBroker ? (
                                <Link
                                    className="text-4xl"
                                    to={`/properties/update/${property._id}`}
                                    title="Edit"
                                >
                                    <AiOutlineEdit />
                                </Link>
                            ) : null}
                            {auth?.isBroker ? (
                                <Link
                                    className="text-4xl"
                                    title="Delete"
                                    to={`/properties/delete/${property._id}`}
                                >
                                    <BsTrash />
                                </Link>
                            ) : null}
                        </div>
                    </div>
                )
            )}
        </div>
    );
};
