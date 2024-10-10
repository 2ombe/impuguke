const express = require("express");
const router = express.Router();
const traineeController = require("../controllers/traineeController");

router.post("/register", traineeController.registerTrainee);
router.get("/all", traineeController.getAllTrainees);
router.get("/:id", traineeController.getTraineeById);
router.get("/sort/district", traineeController.getTraineesByDistrict);
router.put("/:id", traineeController.updateTrainee);
router.delete("/:id", traineeController.deleteTrainee);

module.exports = router;
