const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    // the id of the item to find
    req.params.id,
    // the change to be made. Mongoose will smartly combine your existing
    // document with this change, which allows for partial updates too
    { $push: { exercises: req.body } },
    // an option that asks mongoose to return the updated version
    // of the document instead of the pre-updated one.
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndDelete(req.body.id)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
