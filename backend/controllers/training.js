const EmployeeTraining = require("../models/employeeTraining");
const TrainingProgram = require("../models/training");

// Offer a new training program
exports.offerTrainingProgram = async (req, res) => {
  const { title, description, duration } = req.body;

  try {
    const trainingProgram = new TrainingProgram({
      title,
      description,
      duration,
    });

    await trainingProgram.save();

    res.json({
      message: "Training program offered successfully",
      trainingProgram,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Enroll an employee in a training program
exports.enrollEmployeeInTraining = async (req, res) => {
  const { employeeId, trainingProgramId } = req.body;

  try {
    const employeeTraining = new EmployeeTraining({
      employee: employeeId,
      trainingProgram: trainingProgramId,
    });

    await employeeTraining.save();

    res.json({
      message: "Employee enrolled in training program successfully",
      employeeTraining,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all training programs
exports.getAllTrainingPrograms = async (req, res) => {
  try {
    const trainingPrograms = await TrainingProgram.find();

    res.json({ trainingPrograms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all training programs for a specific employee
exports.getTrainingProgramsForEmployee = async (req, res) => {
  const employeeId = req.params.employeeId;

  try {
    const employeeTrainings = await EmployeeTraining.find({
      employee: employeeId,
    }).populate("trainingProgram");

    res.json({ employeeTrainings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTrainingProgramsById = async (req, res) => {
  const trainingId = req.params;
  try {
    const training = await EmployeeTraining.findById(trainingId);
    res.status(200).json(training);
  } catch (error) {
    console.log(error);
  }
};

// Mark a training program as completed for an employee
exports.completeTrainingProgram = async (req, res) => {
  const trainingId = req.params.trainingId;

  try {
    const employeeTraining = await EmployeeTraining.findByIdAndUpdate(
      trainingId,
      {
        completionStatus: "completed",
        completionDate: Date.now(),
      },
      { new: true }
    );

    if (!employeeTraining) {
      return res.status(404).json({ message: "Employee training not found" });
    }

    res.json({
      message: "Training program completed successfully",
      employeeTraining,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
