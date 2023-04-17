/** Here we create MongoDB Schema */

import { Schema, models, model } from 'mongoose';

const customerSchema = new Schema({
  firstName: String,
  lastName: String,
  company: String,
  status: String,
  email: String,
  password: String,
});

const Customers = model('customers', customerSchema);
export default Customers;
// const mongoose = require('mongoose');

// const CustomerSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('customer', CustomerSchema);
