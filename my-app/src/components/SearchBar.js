import React from "react";

const SearchBar = () => {
    return (
        <div className="flex justify-center my-4">
            <input
                placeholder="Enter region, city, street..."
                className="text-black rounded-lg w-1/2 h-12 outline outline-2 outline-red-500 px-3 drop-shadow-xl"
            />
        </div>
    );
};

export default SearchBar;
