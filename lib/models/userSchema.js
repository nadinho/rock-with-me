const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
