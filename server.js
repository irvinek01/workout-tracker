const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const router = require("./controllers");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`Web App Live on http://localhost/${PORT}`);
});