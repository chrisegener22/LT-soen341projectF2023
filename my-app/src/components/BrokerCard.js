import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineFileSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useAuth } from "../utils/AuthContext";

export const BrokerCard = ({ brokers }) => {
<<<<<<< HEAD
    
    const { id } = useParams();
    const navigate = useNavigate();
        
    //Navigate to the broker details page
    const handleBrokerDetails = () => {
        navigate(`/brokers/${id}/details`);
    };


=======
>>>>>>> 84c4c23223206c413dd999334c49161ed344a8ba
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
