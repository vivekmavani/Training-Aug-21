var express = require("express");
const DoctorDomain = require("../domain/doctor.domain");
var router = express.Router();

class DoctorController {
  //To get all doctors
  static async get(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.getAllDctors(req, res);
  }
  //to get doctor
  static async getDoctor(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.getDoctor(req, res);
  }
  //To insert doctor
  static async insertDoctor(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.insertDoctor(req, res);
  }
  //To update doctor
  static async updateDoctor(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.updateDoctor(req, res);
  }
  //To delete doctor
  static async deleteDoctor(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.deleteDoctor(req, res);
  }
  //To get summary
  static async getSummary(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.getSummary(req, res);
  }
  //To get patient
  static async getPatient(req, res) {
    const doctorDomain = new DoctorDomain();
    doctorDomain.getPatient(req, res);
  }
}

//To get all doctors done
router.get("/", DoctorController.get);
//To get an single doctor by id done
router.get("/:DoctId", DoctorController.getDoctor);
//To delete an doctors done
router.delete("/:DoctId", DoctorController.deleteDoctor);
//To Create New doctor done
router.post("/", DoctorController.insertDoctor);
//To Update Data Of An doctor done
router.put("/", DoctorController.updateDoctor);
//To get summary
router.get("/:DoctId/summary", DoctorController.getSummary);
//To get patient
router.get("/:DoctId/patients/:PatId", DoctorController.getPatient);

module.exports = router;
