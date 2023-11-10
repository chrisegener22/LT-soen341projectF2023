import React from "react";
import SearchBar from "./SearchBar";
import { useAuth } from "../utils/AuthContext";

const Home = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SearchBar />
        </div>
    );
};

export default Home;
