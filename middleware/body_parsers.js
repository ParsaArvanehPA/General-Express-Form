const { Router } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
//////////////////////

const router = Router();

router.use(express.json({ limit: "50mb" }));

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

router.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

router.use(cookieParser());

//////////////////////

module.exports = router;
