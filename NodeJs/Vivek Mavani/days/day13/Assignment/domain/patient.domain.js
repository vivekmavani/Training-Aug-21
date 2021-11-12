const PatientModel = require("../models/patient.model");
const DepartmentModel = require("../models/department.model");
class PatientDomain {
  //To get all patients
  async getAllPatients(req, res) {
    const patients = await PatientModel.find();
    res.send(patients);
  }
  //To get patient
  async getPatient(req, res) {
    let id = req.params.PatId;
    const patient = await PatientModel.findById(id);
    if (patient) {
      res.send(patient);
    } else {
      res.status(404).send("Patient Not Found");
    }
  }
  //To Insert patient
  async insertPatient(req, res) {
    //getting user input
    let data = req.body;
    const finddepartment = await DepartmentModel.findById(req.body.departmentid);
    if(!finddepartment)  return res.status(404).send("Department Not Found");
    const patient = new PatientModel(data);
    try {
      const result = await patient.save();
      res.send(result);
    } catch (e) {
      res.send(e.message);
    }
  }
  //To delete a patient
  async deletePatient(req, res) {
    let id = req.params.PatId;
    const patient = await PatientModel.findByIdAndRemove(id);
    if (patient) {
      res.send("Patient Record Deleted Successfully");
    } else {
      res.status(404).send("Data Not Found");
    }
  }
  //To update a patient
  async updatePatient(req, res) {
    //getting user input
    let data = req.body;

    let id = req.body._id;
    const patients = await PatientModel.find();
    let isAvail = patients.find((e) => e.id == id);

    if (isAvail) {
      try {
        const result = await PatientModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    } else {
      res.status(404).send("Patient Not Foud");
    }
  }

   //To add doctor or assistant in Data Of A patient
    async insertPatientDorA(req, res) {
      try {
        let PId = req.params.PId;
        let id = req.body._id;
        if (!id) return res.status(404).send('The doctor or assistant id is required');
        let categorys = req.body.category;
        if (!categorys) return res.status(404).send('The category is required');
        if(categorys != "doctor" && categorys != "assistant") return res.status(404).send('The category is not valid');
        const patient = await PatientModel.find();
        let isAvail = patient.find((e) => e._id == PId);

        if (isAvail) {
            const doctorsid = patient[0].treated.filter(e => e._id == id && e.category == req.body.category);
            if (doctorsid.length != 0) return res.status(404).send(`${req.body.category} already added`);
          
                const result = await PatientModel.findByIdAndUpdate(
                  PId,
                    {
                        $push: { treated: req.body },
                    },
                    { new: true }
                );
                res.send(result);
            
        } else {
            res.status(404).send("Patient Not Found");
        }
      } catch (e) {
        res.send(e.message);
    }
    }

     //To add insertPatientMedicine in Data Of A patient
      async insertPatientMedicine(req, res) {
        try {
          let PId = req.params.PId;
          let id = req.body._id;
          if (!id) return res.status(404).send('The medicine id is required');
          let categorys = req.body.category;
          if (!req.body.desc) return res.status(404).send('The desc is required');
          if (!categorys) return res.status(404).send('The category is required');
          if(categorys != "morning" && categorys != "afternoon" && categorys != "night") return res.status(404).send('The category is not valid');
          const patient = await PatientModel.find();
          let isAvail = patient.find((e) => e._id == PId);
  
          if (isAvail) {
              const medicineid = patient[0].medicine.filter(e => e._medicineid == id);
              if (medicineid.length != 0) return res.status(404).send(`${req.body.category} already added`);
            
                  const result = await PatientModel.findByIdAndUpdate(
                    PId,
                      {
                          $push: { medicine: req.body },
                      },
                      { new: true }
                  );
                  res.send(result);
              
          } else {
              res.status(404).send("Patient Not Found");
          }
        } catch (e) {
          res.send(e.message);
      }
      }

  //To get medicine
  async getPatientMedicine(req, res) {
    let id = req.params.PatId;
    const patient = await PatientModel.findById(id)
      .populate("medicine._id", "name -_id")
      .select("medicines -_id");
    if (patient) {
      res.send(patient);
    } else {
      res.status(404).send("Patient Not Found");
    }
  }

   //To get patient details
   async getPatientDetails(req, res) {
     try {
      let id = req.params.PatId;
      const patient = await PatientModel.findById(id)
       .populate("medicine._id", "name -_id")
        .populate("treated._id ", "name -_id")
       // .select("medicines -_id");
      if (patient) {
        res.send(patient);
      } else {
        res.status(404).send("Patient Not Found");
      }
    }
     catch(e){
      res.send(e.message);
     }
   
}
}

module.exports = PatientDomain;
