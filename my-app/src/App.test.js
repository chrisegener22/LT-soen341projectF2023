import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";

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
