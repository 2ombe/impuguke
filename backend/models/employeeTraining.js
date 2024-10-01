// models/employeeTraining.js

const mongoose = require('mongoose');

const employeeTrainingSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User model
  trainingProgram: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingProgram', required: true }, // Reference to TrainingProgram model
  completionStatus: { type: String, enum: ['incomplete', 'completed'], default: 'incomplete' },
  completionDate: { type: Date }
});

const EmployeeTraining = mongoose.model('EmployeeTraining', employeeTrainingSchema);

module.exports = EmployeeTraining;
