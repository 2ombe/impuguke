const Employee = require("../models/employee");
const Org = require("../models/org");
const User = require("../models/auth");
const { login } = require("./auth");

exports.addEmployee = async (req, res) => {
  const { department, role, userId, salary, organizationId, startDate } =
    req.body;

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const organization = await Org.findById(organizationId);
    if (!organization) {
      return res.status(404).json({ message: "Organization not found" });
    }

    const employee = new Employee({
      createdBy: req.user._id,
      userId,
      role,
      department,
      salary,
      organization: organization._id,
      startDate,
    });

    // Save the employee
    await employee.save();

    res.json({ message: "Employee added successfully", employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.getEmployeeDetails = async (req, res) => {
  const employeeId = req.params.employeeId;

  try {
    const employee = await Employee.findById(employeeId)
      .populate("userId", "username degree") // Updated to include degree
      .populate("organization", "orgName");

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.allEmployeeDetails = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("userId", "username degree")
      .populate("organization", "orgName");
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Get number of employees by degree
exports.getEmployeesByDegree = async (req, res) => {
  try {
    const employees = await Employee.find().populate("userId", "degree");

    const degreeCounts = employees.reduce((acc, employee) => {
      const degree = employee.userId.degree;
      if (degree) {
        acc[degree] = (acc[degree] || 0) + 1;
      }
      return acc;
    }, {});

    res.json(degreeCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Get total number of employees
exports.getTotalEmployees = async (req, res) => {
  try {
    const totalEmployees = await Employee.countDocuments();
    res.json({ totalEmployees });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update Employee Details
exports.updateEmployeeDetails = async (req, res) => {
  const employeeId = req.params.employeeId;
  const updateData = req.body;

  try {
    if (updateData.organizationId) {
      const organization = await Org.findById(updateData.organizationId);
      if (!organization) {
        return res.status(404).json({ message: "Organization not found" });
      }
      updateData.organization = organization._id;
    }

    const employee = await Employee.findByIdAndUpdate(employeeId, updateData, {
      new: true,
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee details updated successfully", employee });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  const employeeId = req.params.employeeId;

  try {
    const employee = await Employee.findByIdAndDelete(employeeId);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
