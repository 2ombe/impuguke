const express = require("express")
const training = require('../controllers/training')
const router = express.Router()

router.post('/add',training.offerTrainingProgram)
router.post('/onroll',training.enrollEmployeeInTraining )
router.get('/all',training.getAllTrainingPrograms)
router.get('/employee',training.getTrainingProgramsForEmployee)
router.put('/:complete',training.completeTrainingProgram)

module.exports=router