const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.DB_URI;

const mongoose = require('mongoose');

module.exports = async function () {
  try {
    await mongoose.connect(uri, { dbName: 'sample_analytics' });
    console.log('DB CONNECTED...');
  } catch (error) {
    console.error(error);
  }
};
