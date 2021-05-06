const router = require("express").Router();
const routerWorkouts = require("./workouts");

router.use("/workouts", routerWorkouts);
module.exports = router;
