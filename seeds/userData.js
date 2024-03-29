const { User } = require('../models');
// userData is an array of objects that will be users.
const userData = [
  {
    username: 'lesley',
    email: 'lesley@lesley.com',
    password: '$2b$10$W04OSyZoB.Yl.4z6wrnKfuuZUgPfs2qZpNsrnluqjrX7C4fs54OfO',
  },
  {
    username: 'ron',
    email: 'ron@ron.com',
    password: '$2b$10$W4B8iZ1RyqVRzQRqgmaAd.2S6mqFSdYFNfuGIpjGwRVC6vWC7rlZG',
  },
];
//
const seedUsers = () => User.bulkCreate(userData);
//
module.exports = seedUsers;