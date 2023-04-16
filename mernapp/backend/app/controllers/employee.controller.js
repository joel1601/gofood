// const { employee } = require("../models");
const db = require("../models");
const Employee = db.employee;

// Create and Save a new Employee
exports.create = (req, res) => {
  // Create a Employee
  const employee = new Employee({
        employeeId:req.body.employeeId,
        employeeName:req.body.employeeName,
        employeeEmail:req.body.employeeEmail,
        employeePhnoneNumber:req.body.employeePhnoneNumber
  });

  // Save Tutorial in the database
 employee
    .save(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Employee from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    employee.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  
  // Find a single Employee with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    employee.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
  };

  // Update a Employee by the id in the request
exports.update = (req, res) => {
    // if (!req.body) {
    //   return res.status(400).send({
    //     message: "Data to update can not be empty!"
    //   });   
    // }
  
    const id = req.params.id;
  
    employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update employee with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "employee was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating employee with id=" + id
        });
      });
  };


  // Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    employee.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete employee with id=${id}. Maybe employee was not found!`
          });
        } else {
          res.send({
            message: "employee was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete employee with id=" + id
        });
      });
  };
  
  // Delete all Tutorials from the database.
  exports.deleteAll = (req, res) => {
    employee.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} employee were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all employee."
        });
      });
  };
  