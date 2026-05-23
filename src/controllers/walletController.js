const prisma = require('../config/prisma');

exports.getWallet = async (req, res) => {

  try {

    const wallet = await prisma.wallet.findUnique({
      where: {
        userId: req.params.userId
      }
    });

    res.json(wallet);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
