const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  nombre: String,
  precio: String,
  
  
});

module.exports = mongoose.model('product', userSchema);