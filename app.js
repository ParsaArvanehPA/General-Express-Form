const config = require("config");
const express = require("express");
const path = require("path");
//////////////////////

const app = express();
const port = config.get("PORT");
app.use(require("./middleware/body_parsers"));
app.use(express.static(path.join(__dirname, "public")));
////////////////////// DEFINING ROUTES

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/view/landing-page.html"));
});

////////////////////// INITIALIZING SERVER

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
