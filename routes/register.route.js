const express = require("express");
const router = express.Router();
const {
  loginHandler,
  loginWithGoogleHandler,
  signUpHandler,
} = require("../middleware/database");
const { userInfoConfiger } = require("../middleware/data_config");

router.post("/login", (req, res) => {
  const { error } = userInfoConfiger(req.body);
  if (error) {
    return res.send({ error: error.details[0] });
  }

  loginHandler(req, (msg) => {
    return res.send(msg);
  });
});

router.post("/loginWithGoogle", (req, res) => {
  loginWithGoogleHandler(req, (msg) => {
    return res.send(msg);
  });
});

router.post("/signup", (req, res) => {
  const { error } = userInfoConfiger(req.body);
  if (error) {
    return res.send({ error: error.details[0] });
  }
  signUpHandler(req, (msg) => {
    return res.send(msg);
  });
});

module.exports = router;
