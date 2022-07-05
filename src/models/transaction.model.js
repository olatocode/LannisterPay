/** @format */

const mongoose = require('mongoose');

// Defining transaction schema properties
const transactionSchema = new mongoose.Schema({
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

// Convert transaction schema to transaction model
const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = transactionModel;
