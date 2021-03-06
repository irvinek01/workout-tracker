const router = require("express").Router();
const path = require("path");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

module.exports = router;
