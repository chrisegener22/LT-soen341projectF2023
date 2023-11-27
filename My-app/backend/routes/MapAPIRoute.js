const express = require('express');
const router = express.Router();
const Property = require('../models/propertyModel');

// API route to get all properties for the map
router.get('/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties from the database:', error);
    res.status(500).send({ message: 'Failed to fetch properties.' });
  }
});

module.exports = router;