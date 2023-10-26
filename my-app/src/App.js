import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPopup from "./components/LoginPopup";
import { useState } from 'react';
import { AddProperty } from "./components/AddProperty";
import Register from "./components/Register";


function App() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AddProperty" element={<AddProperty />} />
                <Route path="/Register" element={<Register />} />
            </Routes>

            <button onClick={() => setButtonPopup(true)}>Login</button> 
            
            <LoginPopup trigger={buttonPopup} setTrigger = {setButtonPopup}/> 
            
            <LoginPopup />
            
        </div>
    );
}

export default App;
