import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const BrokerDelete = () => {
    // Id to delete
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDeleteUser = () => {
        axios
            .delete(`http://localhost:8080/api/properties/${id}`)
            .then(() => {
                alert("Deleted Successfully");
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    const handleBackButton = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col border-2 mx-auto my-48 border-black w-1/2 rounded-xl p-2">
            <h1 className="flex justify-center">
                Are you sure you want to delete this property?
            </h1>
            <div className="flex flex-row justify-around my-10">
                <button
                    onClick={handleBackButton}
                    className="bg-zinc-200 rounded-full w-1/3 h-10"
                >
                    Back
                </button>
                <button
                    onClick={handleDeleteProperty}
                    className="bg-red-400 rounded-full w-1/3 h-10"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
