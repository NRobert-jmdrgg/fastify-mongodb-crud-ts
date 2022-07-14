const { Schema, model } = require('mongoose');

// MongoDB séma
const accountsSchema = new Schema(
  {
    account_id: Number,
    limit: Number,
    products: [String],
  },
  {
    collection: 'accounts',
  }
);

// ne accounts legyen, mert a mongoDB minden kollekció végére s betűt rak.
module.exports = model('Account', accountsSchema);
