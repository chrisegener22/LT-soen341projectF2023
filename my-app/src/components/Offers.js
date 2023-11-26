import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { OfferCard } from "./OfferCard";

export const Offers = () => {
    const { auth } = useContext(AuthContext);
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/offers/brokerid/${auth.id}`)
            .then((res) => setResults(res.data.data))
            .catch((err) => console.log(err));
    }, [auth]);

    return (
        <div>
            <OfferCard offers={results} />
        </div>
    );
};
