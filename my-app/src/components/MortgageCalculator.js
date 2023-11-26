import React from "react";
import MortgageCalculator from "mortgage-calculator-react";


const MortgageCalculatorPage = () => {
    return (
        <div className="flex min-h-fit min-w-screen items-center justify-center m-4">
            <div className="flex-col max-w-md w-full">
                <MortgageCalculator />
            </div>
        </div>
    );
};

export default MortgageCalculatorPage;
