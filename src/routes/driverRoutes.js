const express = require('express');

const router = express.Router();

const {
  updateDriverLocation,
  toggleDriverOnline
} = require('../controllers/driverController');

router.put('/location/:id', updateDriverLocation);

router.put('/online/:id', toggleDriverOnline);

module.exports = router;
