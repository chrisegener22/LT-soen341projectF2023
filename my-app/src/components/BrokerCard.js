import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineFileSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import AuthContext from "../context/AuthProvider";

export const BrokerCard = ({ brokers }) => {
    const { auth } = useContext(AuthContext);
    return (
        <div className="grid grid-cols-3 items-center">
            {brokers.map((broker, index) => (
                <div
                    key={broker._id}
                    className="border-2 border-black rounded-xl relative p-4 m-4"
                >
                    <h1 className="text-lg font-bold">
                        {broker.firstName} {broker.lastName}
                    </h1>
                    <div className="text-lg">
                        <h1>Email: {broker.email}</h1>
                    </div>
                    <div className="flex flex-row justify-between relative">
                        {auth?.isAdmin ? (
                            <Link
                                className="text-4xl"
                                to={`/brokers/update/${broker._id}`}
                                title="Edit"
                            >
                                <AiOutlineEdit />
                            </Link>
                        ) : null}
                        {auth?.isAdmin ? (
                            <Link
                                className="text-4xl"
                                title="Delete"
                                to={`/brokers/delete/${broker._id}`}
                            >
                                <BsTrash />
                            </Link>
                        ) : null}
                        <Link
                            className="text-4xl"
                            title="Details"
                            to={`/brokers/details/${broker._id}`}
                        >
                            <AiOutlineFileSearch />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};
