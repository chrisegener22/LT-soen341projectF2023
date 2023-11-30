import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AddProperty } from "./components/AddProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import { OfferForm } from "./components/OfferForm";
import { PropertyDetails } from "./components/PropertyDetails";
import { PropertyUpdate } from "./components/PropertyUpdate";
import { PropertyDelete } from "./components/PropertyDelete";
import { BrokerDetails } from "./components/BrokerDetails";
import { Brokers } from "./components/Brokers";
import { BrokerDelete } from "./components/BrokerDelete";
import { BrokerUpdate } from "./components/BrokerUpdate";
import { BrokerAdd } from "./components/BrokerAdd";
import MortgageCalculatorPage from "./components/MortgageCalculator";
import { Offers } from "./components/Offers";
import { OfferDetails } from "./components/OfferDetails";
import { MapComponent } from "./components/MapComponent";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddProperty" element={<AddProperty />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Brokers" element={<Brokers />} />
                <Route path="/Offers" element={<Offers />} />
                <Route path="/Map" element={<MapComponent />} />
                <Route
                    path="/properties/details/offer_form/:id"
                    element={<OfferForm />}
                />
                <Route
                    path="/properties/details/:id"
                    element={<PropertyDetails />}
                />
                <Route
                    path="/properties/update/:id"
                    element={<PropertyUpdate />}
                />
                <Route
                    path="/properties/delete/:id"
                    element={<PropertyDelete />}
                />
                <Route
                    path="/brokers/details/:id"
                    element={<BrokerDetails />}
                />
                <Route path="/brokers/delete/:id" element={<BrokerDelete />} />
                <Route path="/brokers/update/:id" element={<BrokerUpdate />} />
                <Route path="/brokers/add" element={<BrokerAdd />} />
                <Route
                    path="/mortgage-calculator"
                    element={<MortgageCalculatorPage />}
                />
                <Route path="/offers/details/:id" element={<OfferDetails />} />
            </Routes>
        </div>
    );
}

export default App;
