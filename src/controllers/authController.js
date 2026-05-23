const prisma = require('../config/prisma');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

  try {

    const { fullName, phone, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        fullName,
        phone,
        password: hashedPassword
      }
    });

    res.json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

exports.login = async (req, res) => {

  try {

    const { phone, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        phone
      }
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found'
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {

      return res.status(401).json({
        error: 'Invalid credentials'
      });

    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};
