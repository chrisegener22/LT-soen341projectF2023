const express = require('express');
const router = express.Router();

router.post('/calculate-mortgage', async (req, res) => {
  try {
    const { loanAmount, interestRate, loanTerm } = req.body;

    // Mortgage calculation logic
    const monthlyInterestRate = interestRate / 1200;
    const numberOfPayments = loanTerm * 12;
    const numerator = loanAmount * monthlyInterestRate;
    const denominator = 1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments);
    const monthlyPayment = numerator / denominator;

    res.json({ monthlyPayment });
  } catch (err) {
    console.error(err.stack);
    res.status(500).send({ message: "Failed to calculate mortgage." });
  }
});

module.exports = router;

