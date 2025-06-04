require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db');

const seedUsers = async () => {
  await connectDB();
  await User.deleteMany();

  const users = [
    { username: 'user1', password: 'password1', role: 'user' },
    { username: 'user2', password: 'password2', role: 'user' },
    { username: 'user3', password: 'password3', role: 'user' },
    { username: 'user4', password: 'password4', role: 'user' },
    { username: 'user5', password: 'password5', role: 'user' },
    { username: 'admin', password: 'adminpass', role: 'admin' }
  ];

  for (let user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
    await User.create(user);
  }

  console.log('Users seeded');
  process.exit();
};

seedUsers();
