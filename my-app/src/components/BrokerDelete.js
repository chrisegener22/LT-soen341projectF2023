import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const BrokerDelete = () => {
    // Id to delete
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        axios
            .delete(`http://localhost:8080/api/users/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                navigate("/Brokers");
            })
            .catch((err) => console.log(err));
    };

    const handleBackButton = () => {
        navigate("/Brokers");
    };

    return (
        <div className="flex flex-col border-2 mx-auto my-48 border-black w-1/2 rounded-xl p-2">
            <h1 className="flex justify-center">
                Are you sure you want to delete this Broker?
            </h1>
            <div className="flex flex-row justify-around my-10">
                <button
                    onClick={handleBackButton}
                    className="bg-zinc-200 rounded-full w-1/3 h-10"
                >
                    Back
                </button>
                <button
                    onClick={handleDeleteUser}
                    className="bg-red-400 rounded-full w-1/3 h-10"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
