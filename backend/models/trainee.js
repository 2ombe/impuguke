
const mongoose = require("mongoose");

const traineeSchema = new mongoose.Schema(
  {
    names: { type: String, required: true },
    sex: { type: String, enum: ["Male", "Female", "Other"], required: true },
    district: { type: String, required: true },
    sector: { type: String, required: true },
    cell: { type: String, required: true },
    village: { type: String, required: true },
    idNumber: { type: String, required: true, unique: true },
    studies: { type: String, required: true },
    status: {
      type: String,
      enum: ["Enrolled", "Completed", "Dropped"],
      default: "Enrolled",
    },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const Trainee = mongoose.model("Trainee", traineeSchema);

module.exports = Trainee;
