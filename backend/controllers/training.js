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
  const { trainingProgramId } = req.body;

  try {
    const TrainingProgram = new TrainingProgram({
      employee: employeeId,
      trainingProgram: trainingProgramId,
    });

    await TrainingProgram.save();

    res.json({
      message: "Employee enrolled in training program successfully",
      TrainingProgram,
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

exports.getTrainingProgramsById = async (req, res) => {
  const trainingId = req.params;
  console.log(trainingId.id);

  try {
    const training = await TrainingProgram.findById(trainingId.id);
    console.log(training);

    res.status(200).json(training);
  } catch (error) {
    console.log(error);
  }
};

// Mark a training program as completed for an employee
exports.completeTrainingProgram = async (req, res) => {
  const trainingId = req.params.trainingId;

  try {
    const TrainingProgram = await TrainingProgram.findByIdAndUpdate(
      trainingId,
      {
        completionStatus: "completed",
        completionDate: Date.now(),
      },
      { new: true }
    );

    if (!TrainingProgram) {
      return res.status(404).json({ message: "Employee training not found" });
    }

    res.json({
      message: "Training program completed successfully",
      TrainingProgram,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.deleteTraining = async (req, res) => {
  const trainingId = req.params.id;
  console.log(trainingId);

  try {
    const training = await TrainingProgram.findByIdAndDelete(trainingId);
    res.status(200).json({ message: "Training deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
