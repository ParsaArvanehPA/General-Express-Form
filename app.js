const config = require("config");
const express = require("express");
const path = require("path");
const registerRoute = require("./routes/register.route");
const cors = require("cors");
//////////////////////

const app = express();
const port = config.get("PORT");
app.use(require("./middleware/body_parsers"));
// app.use(express.static(path.join(__dirname, "public")));

////////////////////// DEFINING ROUTES

app.use("/register", registerRoute);

////////////////////// INITIALIZING SERVER

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
