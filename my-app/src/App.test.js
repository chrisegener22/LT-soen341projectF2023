import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import SearchBar from "./components/SearchBar";

test("renders navbar", () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );
    // Check if company name and sign in button are there
    const companyName = screen.getByText(/LT Real Estate/i);
    expect(companyName).toBeInTheDocument();

    const login = screen.getByText(/Login/i);
    expect(login).toBeInTheDocument();
});

test("renders search bar", () => {
    render(<SearchBar />);
    // Check if the search bar is on the home page
    const searchBar = screen.getByPlaceholderText(
        /Enter region, city, street.../i
    );
    expect(searchBar).toBeInTheDocument();
});
