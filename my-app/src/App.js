import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AddProperty } from "./components/AddProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import OfferForm from "./components/OfferForm";
import { PropertyDetails } from "./components/PropertyDetails";
import { PropertyUpdate } from "./components/PropertyUpdate";
import { PropertyDelete } from "./components/PropertyDelete";
import OfferManagement from "./components/OfferManagement";


function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddProperty" element={<AddProperty />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
                <Route 
                    path="/properties/details/:id/offer-form" 
                    element={<OfferForm />} />
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
                    path="/properties/offers/:id"
                    element={<OfferManagement />}
                />
            </Routes>
        </div>
    );
}

export default App;
