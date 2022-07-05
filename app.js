/** @format */

const express = require('express');
const dotenv = require('dotenv');
const transactionRouter = './src/routes/transaction.route';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const connect_MongoDB = require('./src/database/mongodb');
const { PORT } = process.env;

// LannisterPay Base Url
app.get('/', (req, res) => {
  res.json({
    Home: 'Welcome to LannisterPay',
  });
});

app.use('/api/v1', transactionRouter);

connect_MongoDB;

app.listen(PORT, () => {
  console.log(`server is ruining on Port ${PORT}`);
});
