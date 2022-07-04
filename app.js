/** @format */

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { PORT } = process.env;

// LannisterPay Base Url
app.get('/', (req, res) => {
  res.json({
    Home: 'Welcome to LannisterPay',
  });
});

app.listen(PORT, () => {
  console.log(`server is ruining on Port ${PORT}`);
});
