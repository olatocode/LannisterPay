/** @format */
const Transaction = require('../models/transaction.model');

exports.initiateTransaction = async (req, res) => {
  try {
    const { amount, currency, customerEmail, splitInfo } = req.body;
    const newTransaction = await Transaction.create({
      amount,
      currency,
      customerEmail,
      splitInfo,
    });
    console.log(newTransaction);
    res.status(201).json({
      message: 'Created',
      newTransaction,
    });
  } catch (error) {
    res.status(500).json({
      message: `error.message`,
    });
  }
};
