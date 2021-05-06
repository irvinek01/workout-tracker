const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
  // day: Date, defaults to current date/time
  // exercises: [{
  //   type: { type: String }, (required)
  //   name: String, (required)
  //   duration: Number, (required)
  //   weight: Number,
  //   reps: Number,
  //   sets: Number
  //   distance: Number
  // }]
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "exercise type is Required",
      },
      name: {
        type: String,
        trim: true,
        required: "exercise name is Required",
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
