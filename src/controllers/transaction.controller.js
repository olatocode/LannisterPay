/** @format */

const mongoose = require('mongoose');
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
