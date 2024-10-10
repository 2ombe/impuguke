const express = require("express");
const training = require("../controllers/training");
const router = express.Router();

router.post("/add", training.offerTrainingProgram);
router.post("/onroll", training.enrollEmployeeInTraining);
router.get("/all", training.getAllTrainingPrograms);
router.get("/single/:id", training.getTrainingProgramsById);
router.put("/:complete", training.completeTrainingProgram);
router.delete("/:id/delete", training.deleteTraining);
module.exports = router;
