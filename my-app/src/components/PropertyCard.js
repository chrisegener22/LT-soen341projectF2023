import React from "react";

export const PropertyCard = ({ properties }) => {
    return (
        <div className="grid grid-cols-3 items-center">
            {properties.map((property, index) => (
                <div
                    key="property._id"
                    className="border-2 border-black rounded-xl relative p-4 m-4"
                >
                    <img
                        src={property.imageURL}
                        className="h-48 w-48 float-left mx-5"
                    />
                    <h1 className="text-lg font-bold text-green-800">
                        ${property.price}
                    </h1>
                    <div className="text-lg">
                        <h1>
                            Address: {property.houseNumber} {property.street}{" "}
                            St, {property.city}, {property.province},{" "}
                            {property.postalCode}
                        </h1>
                    </div>
                    <div></div>
                </div>
            ))}
        </div>
    );
};
