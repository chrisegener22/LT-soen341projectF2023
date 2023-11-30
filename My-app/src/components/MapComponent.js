import React, { useEffect, useState } from "react";
import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    InfoWindowF,
} from "@react-google-maps/api";
import axios from "axios";
import { Link } from "react-router-dom";

export const MapComponent = () => {
    const [properties, setProperties] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries: ["places"],
    });

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/properties")
            .then((res) => setProperties(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    if (!isLoaded) {
        return (
            <div>
                <h1 className="text-3xl font-bold">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <GoogleMap
                center={{ lat: 45.5037257, lng: -73.6714299 }}
                zoom={12}
                mapContainerStyle={{ width: "90%", height: "100vh" }}
                options={{
                    styles: [
                        {
                            elementType: "labels",
                            featureType: "poi",
                            stylers: [{ visibility: "off" }],
                        },
                    ],
                }}
            >
                {properties.map((property, index) => (
                    <MarkerF
                        position={{ lat: property?.lat, lng: property?.lng }}
                        onClick={() => {
                            property === selectedPlace
                                ? setSelectedPlace(null)
                                : setSelectedPlace(property);
                        }}
                    />
                ))}
                {!selectedPlace ? null : (
                    <Link to={`/properties/details/${selectedPlace._id}`}>
                        <InfoWindowF
                            position={{
                                lat: selectedPlace.lat,
                                lng: selectedPlace.lng,
                            }}
                            zIndex={1}
                            onCloseClick={() => {
                                setSelectedPlace(null);
                            }}
                        >
                            <div>
                                <h2>{selectedPlace.address}</h2>
                                <h2>${selectedPlace.price}</h2>
                                <img src={selectedPlace.imageURL} />
                            </div>
                        </InfoWindowF>
                    </Link>
                )}
            </GoogleMap>
        </div>
    );
};
