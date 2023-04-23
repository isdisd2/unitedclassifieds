"use strict";
// start: nodemon index.js
const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();

const app = express();
const port = process.env.PORT;
const appUri = process.env.APP_URI;

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
};

app.use(allowCrossDomain);
app.use(express.json());
// app.use("flysearch/", routes);
app.use("", routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Node server is running at  ${appUri}:${port}`);
});