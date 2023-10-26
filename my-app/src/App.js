import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LoginPopup from "./components/LoginPopup";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <LoginPopup />
            
        </div>
    );
}

export default App;
