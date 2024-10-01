const express = require("express");
const employee = require("../controllers/employee");
const router = express.Router();

router.post("/add", employee.addEmployee);
router.get("/all", employee.allEmployeeDetails);
router.patch("/update", employee.updateEmployeeDetails);
router.delete("/delete", employee.deleteEmployee);
router.get("/:employeeId", employee.getEmployeeDetails);
router.get("/employees/total-count", employee.getTotalEmployees);
router.get("/employees/degree-counts", employee.getEmployeesByDegree);

module.exports = router;
//saved chenges
