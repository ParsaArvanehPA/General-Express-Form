const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  firstName: String,
  lastName: String,
  imgUrl: String,
  loginWithGoogle: Boolean,
});

module.exports = mongoose.model("user_info", userSchema);
