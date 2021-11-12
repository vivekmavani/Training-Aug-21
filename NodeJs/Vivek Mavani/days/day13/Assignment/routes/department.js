var express = require("express");
const DepartmentDomain = require("../domain/department.domain");
var router = express.Router();

class DepartmentController {
  //To get all department
  static async get(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.getAllDepartments(req, res);
  }
  //to get department
  static async getDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.getDepartment(req, res);
  }
  //To insert department
  static async insertDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.insertDepartment(req, res);
  }
  //To delete department
  static async deleteDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.deleteDepartment(req, res);
  }
  //To delete a doctor in department 
  static async deleteDepartmentDoctor(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.deleteDepartmentDoctor(req, res);
  }
  //To delete a assistant in department 
  static async deleteDepartmentAssistant(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.deleteDepartmentAssistant(req, res);
  }

  //To insert doctors in department
  static async insertDoctorsInDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.insertDoctorsInDepartment(req, res);
  }

   //To insert Assistant in department
   static async insertAssistantInDepartment(req, res) {
    const departmentDomain = new DepartmentDomain();
    departmentDomain.insertAssistantInDepartment(req, res);
  }
}

//To get all departments done
router.get("/", DepartmentController.get); 
//To get a single department by id done
router.get("/:DepId", DepartmentController.getDepartment);
//To delete a department done
router.delete("/:DepId", DepartmentController.deleteDepartment);
//To delete a doctor in department 
router.delete("/doctor/:DepId", DepartmentController.deleteDepartmentDoctor);
//To delete a assistant in department done
router.delete("/assistant/:DepId", DepartmentController.deleteDepartmentAssistant);
//To insert department done
router.post("/", DepartmentController.insertDepartment);
// insert doctors in department done
router.put("/doctor/:DepId", DepartmentController.insertDoctorsInDepartment);
// insert Assistant in department done
router.put("/assistant/:DepId", DepartmentController.insertAssistantInDepartment);
module.exports = router;
