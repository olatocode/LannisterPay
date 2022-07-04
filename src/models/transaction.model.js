/** @format */

const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  splitInfo: [
    {
      splitType: String,
      enum: ['FLAT', 'PERCENTAGE', 'RATIO'],
      splitValue: Number,
      splitEntityId: String,
    },
  ],
});
// convert transaction schema to transaction model
const transactionModel = mongoose.model('transaction', transactionSchema);
module.exports = transactionModel;
