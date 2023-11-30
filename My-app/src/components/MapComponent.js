import React from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

export const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

    if (isLoaded) {
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
                ></GoogleMap>
            </div>
        );
    } else {
        return (
            <div>
                <h1 className="text-3xl font-bold">Loading...</h1>
            </div>
        );
    }
};
