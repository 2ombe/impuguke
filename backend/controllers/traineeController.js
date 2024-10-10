const Trainee = require("../models/trainee");

// Register a new trainee
exports.registerTrainee = async (req, res) => {
  const {
    names,
    sex,
    district,
    sector,
    cell,
    village,
    idNumber,
    studies,
    status,
    phone,
  } = req.body;

  try {
    const newTrainee = new Trainee({
      names,
      sex,
      district,
      sector,
      cell,
      village,
      idNumber,
      studies,
      status,
      phone,
    });

    await newTrainee.save();
    res.status(201).json({
      message: "Trainee registered successfully",
      trainee: newTrainee,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Get all trainees
exports.getAllTrainees = async (req, res) => {
  try {
    const trainees = await Trainee.find();
    res.status(200).json(trainees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getTraineesByDistrict = async (req, res) => {
  const { district } = req.query;

  try {
    let query = {};
    if (district) {
      query.district = district;
    }

    const trainees = await Trainee.find(query).sort({ district: 1 });

    res.status(200).json(trainees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching trainees" });
  }
};

exports.getTraineeById = async (req, res) => {
  const traineeId = req.params.id;

  try {
    const trainee = await Trainee.findById(traineeId);
    if (!trainee) {
      return res.status(404).json({ message: "Trainee not found" });
    }
    res.status(200).json(trainee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateTrainee = async (req, res) => {
  const traineeId = req.params.id;
  const updates = req.body;

  try {
    const updatedTrainee = await Trainee.findByIdAndUpdate(traineeId, updates, {
      new: true,
    });
    if (!updatedTrainee) {
      return res.status(404).json({ message: "Trainee not found" });
    }
    res.status(200).json({
      message: "Trainee updated successfully",
      trainee: updatedTrainee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteTrainee = async (req, res) => {
  const traineeId = req.params.id;

  try {
    const deletedTrainee = await Trainee.findByIdAndDelete(traineeId._id);
    if (!deletedTrainee) {
      return res.status(404).json({ message: "Trainee not found" });
    }
    res.status(200).json({ message: "Trainee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
