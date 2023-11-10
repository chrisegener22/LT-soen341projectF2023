import { render, screen, waitFor } from "@testing-library/react";
import Navbar from "./components/Navbar";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./components/SearchBar";

import { Brokers } from "./components/Brokers";
import userEvent from "@testing-library/user-event";


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


test("renders brokers page", () => {
    render(
        <MemoryRouter>
            <Brokers />
        </MemoryRouter>
    );

    // Check if the page title is there
    const searchBar = screen.getByPlaceholderText(
        /Enter Brokers name or email.../i
    );
    expect(searchBar).toBeInTheDocument();

});

describe("Broker list", ()=>{

    it("should render a list of brokers", async () => {
        render(
            <MemoryRouter>
                <Brokers />
            </MemoryRouter>
        
        );
        //await waitFor(() => screen.getByText(/Brokers/i));

    });
});









