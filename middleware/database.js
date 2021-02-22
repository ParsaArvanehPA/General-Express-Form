const mongoose = require("mongoose");
const User = require("../models/user_schema");

mongoose.connect("mongodb://localhost/pa_coffee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const loginHandler = (req, callback) => {
  const { password } = req.body;
  const email = req.body.email.toLowerCase();

  User.findOne({ email }, (err, result) => {
    if (err) callback({ error: `Error: ${err}` });
    if (result) {
      if (result.password === password) {
        callback({ res: "logging in..." });
      } else {
        callback({ error: "No Such User." });
      }
    }
    callback({ error: "No Such User." });
  });
};

const loginWithGoogleHandler = (req, callback) => {
  const { firstName, lastName, imgUrl } = req.body;
  const email = req.body.email.toLowerCase();

  const newUser = new User({
    email,
    firstName,
    lastName,
    imgUrl,
    loginWithGoogle: true,
  });

  User.findOne({ email }, (err, result) => {
    if (err) console.log(err);
    if (result) {
      callback({ res: "Logging in..." });
      return;
    }

    newUser.save((err, result) => {
      if (err) callback({ error: `Error: ${err}` });
      callback({ res: "Logging in..." });
    });
  });
};

const signUpHandler = (req, callback) => {
  const { password, firstName, lastName } = req.body;
  const email = req.body.email.toLowerCase();

  const newUser = new User({
    email,
    password,
    firstName,
    lastName,
    loginWithGoogle: false,
  });

  User.findOne({ email }, (err, result) => {
    if (err) callback({ error: `Error: ${err}` });
    if (result) {
      callback({ error: "User Already Exists" });
      return;
    }

    newUser.save((err, result) => {
      if (err) callback({ error: `Error: ${err}` });
      callback({ res: "successfuly created new user!!" });
    });
  });
};

module.exports = { loginHandler, signUpHandler, loginWithGoogleHandler };
