const prisma = require('../config/prisma');

exports.updateDriverLocation = async (req, res) => {

  try {

    const { latitude, longitude } = req.body;

    const driver = await prisma.driver.update({
      where: {
        id: req.params.id
      },
      data: {
        latitude,
        longitude
      }
    });

    res.json(driver);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.toggleDriverOnline = async (req, res) => {

  try {

    const driver = await prisma.driver.update({
      where: {
        id: req.params.id
      },
      data: {
        isOnline: req.body.isOnline
      }
    });

    res.json(driver);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
