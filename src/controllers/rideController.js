const prisma = require('../config/prisma');

exports.createRide = async (req, res) => {

  try {

    const {
      pickup,
      destination,
      vehicleType,
      fare,
      userId
    } = req.body;

    const ride = await prisma.ride.create({
      data: {
        pickup,
        destination,
        vehicleType,
        fare,
        userId
      }
    });

    res.json(ride);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.getRides = async (req, res) => {

  try {

    const rides = await prisma.ride.findMany({
      include: {
        user: true,
        driver: true
      }
    });

    res.json(rides);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
