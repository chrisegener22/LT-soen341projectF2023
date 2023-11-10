import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const BrokerCard = ({ brokers }) => {
    
    const { id } = useParams();
    const navigate = useNavigate();
        
    //Navigate to the broker details page
    const handleBrokerDetails = () => {
        navigate(`/brokers/${id}/details`);
    };


    const { auth, user } = useAuth();

    return (
        <div className="grid grid-cols-3 items-center">
            {brokers.map((broker, index) => (
                <div
                    key={broker._id}
                    className="border-2 border-black rounded-xl relative p-4 m-4"
                >
                    <h1 className="text-lg font-bold text-green-800">
                        {broker.firstName} {broker.lastName}
                    </h1>
                    <div className="text-lg">
                        <h1>Email: {broker.email}</h1>
                    </div>
                    <div className="flex flex-row justify-between relative">
                        {auth && user.isAdmin ? (
                            <Link
                                className="text-4xl"
                                to={`/brokers/update/${broker._id}`}
                                title="Edit"
                            >
                                <AiOutlineEdit />
                            </Link>
                        ) : (
                            <div> </div>
                        )}
                        {auth && user.isAdmin ? (
                            <Link
                                className="text-4xl"
                                title="Delete"
                                to={`/brokers/delete/${broker._id}`}
                            >
                                <BsTrash />
                            </Link>
                        ) : (
                            <div> </div>
                        )}
                    
                    </div>
                    <div>
                        <button
                            onClick={handleBrokerDetails}
                            className="bg-slate-400 rounded-md py-2 w-32 text-white text-sm font-medium mb-2 justify-self-start"
                            title="Broker Details"
                        >
                            Details
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};
