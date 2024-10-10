// models/trainingProgram.js

const mongoose = require("mongoose");

const trainingProgramSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  organisation:{type:mongoose.Types.ObjectId,Ref:"Org"},
  image: { type: String },
  duration: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  done: {
    type: String,
    enum: ["In progress", "Completed", "Not taken"],
    default: "In progress",
  },
});

const TrainingProgram = mongoose.model(
  "TrainingProgram",
  trainingProgramSchema
);

module.exports = TrainingProgram;
