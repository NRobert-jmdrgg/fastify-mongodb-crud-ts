const { Schema, model } = require('mongoose');

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

module.exports = model('Accounts', accountsSchema);
