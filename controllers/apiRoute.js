const router = require("express").Router();
const db = require("../models");

// GET route last workout from db
router.get("/api/workouts", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.find({}).sort({ _id: 1 });
    res.status(200).json(lastWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add exercises to the most recent workout plan.
router.put("/api/workouts/:id", async (req, res) => {
  try {
    const addExercise = await db.Workout.findByIdAndUpdate(
      req.param.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    );
    res.status(200).json(addExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add new exercises to a new workout plan.
router.post("/api/workouts/", async (req, res) => {
  try {
    const newWorkout = await db.Workout.create(req.body);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route certain workouts within a certain range
router.get("/api/workouts/range", async (req, res) => {
  try {
    const workoutsWithinCertainRange = await db.Workout.find({})
      .limit(7)
      .sort({ _id: -1 });
    const newWorkoutsWithinCertainRange = workoutsWithinCertainRange.reverse();
    res.status(200).json(newWorkoutsWithinCertainRange);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
