import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AddProperty } from "./components/AddProperty";
import Register from "./components/Register";
import Login from "./components/Login";
import { PropertyDetails } from "./components/PropertyDetails";
import { PropertyUpdate } from "./components/PropertyUpdate";

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
                    path="/properties/details/:id"
                    element={<PropertyDetails />}
                />
                <Route
                    path="/properties/update/:id"
                    element={<PropertyUpdate />}
                />
            </Routes>
        </div>
    );
}

export default App;
