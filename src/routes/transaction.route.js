/** @format */

const express = require('express');
const Transaction = require('../controllers/transaction.controller');
const router = express.Router();

router.post('/split-payments/compute', Transaction.initiateTransaction);

module.exports = router;
