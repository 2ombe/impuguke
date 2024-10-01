// models/employee.js
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "employee",
  },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Org",
    required: true,
  },
  startDate: { type: Date, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
