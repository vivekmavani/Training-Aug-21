var express = require("express");
const PatientDomain = require("../domain/patient.domain");
var router = express.Router();

class PatientController {
  //To get all patients
  static async get(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.getAllPatients(req, res);
  }
  //to get patient
  static async getPatient(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.getPatient(req, res);
  }
  //To insert patient
  static async insertPatient(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.insertPatient(req, res);
  }
   //To add doctor or assistant in Data Of A patient
   static async insertPatientDorA(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.insertPatientDorA(req, res);
  }

   //To add insertPatientMedicine in Data Of A patient
   static async insertPatientMedicine(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.insertPatientMedicine(req, res);
  }

  //To update patient
  static async updatePatient(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.updatePatient(req, res);
  }
  //To delete patient
  static async deletePatient(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.deletePatient(req, res);
  }
  //To get patient medicine
  static async getPatientMedicine(req, res) {
    const patientDomain = new PatientDomain();
    patientDomain.getPatientMedicine(req, res);
    
  }
    //To get Patient Details
    static async getPatientDetails(req, res) {
        const patientDomain = new PatientDomain();
        patientDomain.getPatientDetails(req, res);
        
      }
}

//To get all patients done
router.get("/", PatientController.get);
//To get an single patient by id done
router.get("/:PatId", PatientController.getPatient);
//To delete a patient done
router.delete("/:PatId", PatientController.deletePatient);
//To insert patient done
router.post("/", PatientController.insertPatient);
//To Update Data Of A patient done
router.put("/", PatientController.updatePatient);
//To get medcine of patient done
router.get("/:PatId/medicine", PatientController.getPatientMedicine);
//To get Patient Details
router.get("/:PatId/patientDetails", PatientController.getPatientDetails);
//To add doctor or assistant in Data Of A patient done
router.put("/doctororassistant/:PId", PatientController.insertPatientDorA);

//To add medicine in Data Of A patient done
router.put("/medicine/:PId", PatientController.insertPatientMedicine);

module.exports = router;
