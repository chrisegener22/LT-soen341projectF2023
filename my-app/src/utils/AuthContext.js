import { createContext, useContext, useState, useEffect } from "react";

// Create authentication context
const AuthContext = createContext({
    auth: null,
    setAuth: () => {},
    user: null,
});

// Export function to use authentication context
export const useAuth = () => useContext(AuthContext);

// Wrapper for authentication
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);
    const [user, setUser] = useState(null);

    // Check if user data was received from server
    useEffect(() => {
        try {
            const userData = JSON.parse(sessionStorage.getItem("userData"));
            setUser(userData);
        } catch (err) {
            setUser(null);
            console.log(err);
        }
    }, [auth]);

    // Provide context to all children
    return (
        <AuthContext.Provider value={{ auth, setAuth, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
