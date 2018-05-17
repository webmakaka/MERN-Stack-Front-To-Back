const express = require("express");
const mongoose = require("mongoose");

const app = express();

const db = require("./config/keys.js").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
