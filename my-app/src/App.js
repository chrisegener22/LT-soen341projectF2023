import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { AddProperty } from "./components/AddProperty";
import Register from "./components/Register";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddProperty" element={<AddProperty />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
