import React from "react";

const SearchBar = () => {
    return (
        <div className="flex justify-center my-20">
            {/* Search icon next to bar */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 my-5 mx-2.5"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
            <input
                placeholder="Enter region, city, street..."
                className="text-black rounded-lg w-1/2 h-16 outline outline-2 outline-red-500 px-3 drop-shadow-xl"
            />
        </div>
    );
};

export default SearchBar;
