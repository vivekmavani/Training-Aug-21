//Create a Restful API to create an employee,get all employees, get an employees,get an employee,update and employee
var employeeschemadata = require('./data');

var express = require('express');

var router = express.Router();

const logfortask = require('./logfortask');

let verifyToken = require('../Authentication/verifytoken');

router.use(express.json()); //req.body

router.use(logfortask);

router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
  next();
})
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/days', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Mongodb...'))
  .catch(err => console.error('Could not connected to Mongodb...', err));

const employeeSchema = new mongoose.Schema(employeeschemadata);
const Employee = mongoose.model('employees', employeeSchema);

//http://localhost:3000/emps get all employees
router.get('/all', verifyToken, async (req, res) => {
  const employees = await Employee.find({});
  try {
    res.send(employees);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//http://localhost:3000/emps/1 get an employee
router.get('/:id', verifyToken, async (req, res) => {

  try {
    const emp = await Employee.find({ _id: req.params.id });
    if (!emp) return res.status(404).send('The employee with given id was not found');
    res.send(emp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//http://localhost:3000/emps create an employee
router.post('/', verifyToken, async (req, res) => {

  const employeess = {
    LegalEntityId: req.body.LegalEntityId,
    AddressLine1: req.body.AddressLine1,
    AddressLine2: req.body.AddressLine2,
    AddressLine3: req.body.AddressLine3,
    CitizenshipId: req.body.CitizenshipId,
    CitizenshipLegislationCode: req.body.CitizenshipLegislationCode,
    CitizenshipStatus: req.body.CitizenshipStatus,
    CitizenshipToDate: req.body.CitizenshipToDate,
    City: req.body.City,
    CorrespondenceLanguage: req.body.CorrespondenceLanguage,
    Country: req.body.Country,
    CreationDate: req.body.CreationDate,
    DateOfBirth: req.body.DateOfBirth,
    DisplayName: req.body.DisplayName,
    DriversLicenseExpirationDate: req.body.DriversLicenseExpirationDate,
    DriversLicenseId: req.body.DriversLicenseId,
    DriversLicenseIssuingCountry: req.body.DriversLicenseIssuingCountry,
    EffectiveStartDate: req.body.EffectiveStartDate,
    Ethnicity: req.body.Ethnicity,
    FirstName: req.body.FirstName,
    Gender: req.body.Gender,
    HireDate: req.body.HireDate,
    HomeFaxAreaCode: req.body.HomeFaxAreaCode,
    HomeFaxCountryCode: req.body.HomeFaxCountryCode,
    HomeFaxExtension: req.body.HomeFaxExtension,
    HomeFaxLegislationCode: req.body.HomeFaxLegislationCode,
    HomeFaxNumber: req.body.HomeFaxNumber,
    HomePhoneAreaCode: req.body.HomePhoneAreaCode,
    HomePhoneCountryCode: req.body.HomePhoneCountryCode,
    HomePhoneExtension: req.body.HomePhoneExtension,
    HomePhoneLegislationCode: req.body.HomePhoneLegislationCode,
    HomePhoneNumber: req.body.HomePhoneNumber,
    Honors: req.body.Honors,
    LastName: req.body.LastName,
    LastUpdateDate: req.body.LastUpdateDate,
    LicenseNumber: req.body.LicenseNumber,
    links: req.body.links,
    MaritalStatus: req.body.MaritalStatus,
    MiddleName: req.body.MiddleName,
    MilitaryVetStatus: req.body.MilitaryVetStatus,
    NameSuffix: req.body.NameSuffix,
    NationalId: req.body.NationalId,
    NationalIdCountry: req.body.NationalIdCountry,

  };
  const employee = new Employee(employeess);
  try {
    const result = await employee.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//http://localhost:3000/emps/1 update an employee
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id);
    if (!emp) return res.status(404).send('The employee with given id was not found');

    emp.AddressLine1 = req.body.AddressLine1;
    emp.AddressLine2 = req.body.AddressLine2;
    emp.AddressLine3 = req.body.AddressLine3;
    emp.CitizenshipId = req.body.CitizenshipId;
    emp.CitizenshipLegislationCode = req.body.CitizenshipLegislationCode;
    emp.CitizenshipStatus = req.body.CitizenshipStatus;
    emp.CitizenshipToDate = req.body.CitizenshipToDate;
    emp.City = req.body.City;
    emp.CorrespondenceLanguage = req.body.CorrespondenceLanguage;
    emp.Country = req.body.Country;
    emp.CreationDate = req.body.CreationDate;
    emp.DateOfBirth = req.body.DateOfBirth;
    emp.DisplayName = req.body.DisplayName;
    emp.DriversLicenseExpirationDate = req.body.DriversLicenseExpirationDate;
    emp.DriversLicenseId = req.body.DriversLicenseId;
    emp.DriversLicenseIssuingCountry = req.body.DriversLicenseIssuingCountry;
    emp.EffectiveStartDate = req.body.EffectiveStartDate;
    emp.Ethnicity = req.body.Ethnicity;
    emp.FirstName = req.body.FirstName;
    emp.Gender = req.body.Gender;
    emp.HireDate = req.body.HireDate;
    emp.HomeFaxAreaCode = req.body.HomeFaxAreaCode;
    emp.HomeFaxCountryCode = req.body.HomeFaxCountryCode;
    emp.HomeFaxExtension = req.body.HomeFaxExtension;
    emp.HomeFaxLegislationCode = req.body.HomeFaxLegislationCode;
    emp.HomeFaxNumber = req.body.HomeFaxNumber;
    emp.HomePhoneAreaCode = req.body.HomePhoneAreaCode;
    emp.HomePhoneCountryCode = req.body.HomePhoneCountryCode;
    emp.HomePhoneExtension = req.body.HomePhoneExtension;
    emp.HomePhoneLegislationCode = req.body.HomePhoneLegislationCode;
    emp.HomePhoneNumber = req.body.HomePhoneNumber;
    emp.Honors = req.body.Honors;
    emp.LastName = req.body.LastName;
    emp.LastUpdateDate = req.body.LastUpdateDate;
    emp.LicenseNumber = req.body.LicenseNumber;
    emp.links = req.body.links;
    emp.MaritalStatus = req.body.MaritalStatus;
    emp.MiddleName = req.body.MiddleName;
    emp.MilitaryVetStatus = req.body.MilitaryVetStatus;
    emp.NameSuffix = req.body.NameSuffix;
    emp.NationalId = req.body.NationalId;
    emp.NationalIdCountry = req.body.NationalIdCountry;

    const result = await emp.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }

});


//http://localhost:3000/emps/{empID}/child/assignments get all assignments
router.get('/:empID/child/assignments', verifyToken, async (req, res) => {
  try {
    const emp = await Employee.find({ _id: req.params.empID }).select({ assignments: 1 });
    if (!emp) return res.status(404).send('The employee with given id was not found');
    res.send(emp);
  } catch (error) {
    res.status(500).send(error.message);
  }

});

//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} get assignment by assignmentis
router.get('/:empID/child/assignments/:AssignmentID', verifyToken, async (req, res) => {

  try {
    const emp = await Employee.findOne(
      {
        $and: [
          { _id: req.params.empID }, { assignments: { $elemMatch: { AssignmentId: parseInt(req.params.AssignmentID) } } }
        ]
      }
    )
      .select({ assignments: 1 });
    if (!emp) return res.status(404).send('The Assignment with given id was not found');
    res.send(emp);
  } catch (error) {
    res.status(500).send(error.message);
  }

});

//http://localhost:3000/emps/{empID}/child/assignments create assignment
router.post('/:empID/child/assignments', verifyToken, async (req, res) => {

  var assignmentsobj = {
    AssignmentId: req.body.AssignmentId,
    ActionCode: req.body.ActionCode,
    ActionReasonCode: req.body.ActionReasonCode,
    ActualTerminationDate: req.body.ActualTerminationDate,
    AssignmentCategory: req.body.AssignmentCategory,
    assignmentDFF: req.body.assignmentDFF,
    assignmentExtraInformation: req.body.assignmentExtraInformation,
    AssignmentName: req.body.AssignmentName,
    AssignmentNumber: req.body.AssignmentNumber,
    AssignmentProjectedEndDate: req.body.AssignmentProjectedEndDate,
    AssignmentStatus: req.body.AssignmentStatus,
    AssignmentStatusTypeId: req.body.AssignmentStatusTypeId,
    BusinessUnitId: req.body.BusinessUnitId,
    CreationDate: req.body.CreationDate,
    DefaultExpenseAccount: req.body.DefaultExpenseAccount,
    DepartmentId: req.body.DepartmentId,
    EffectiveEndDate: req.body.EffectiveEndDate,
    EffectiveStartDate: req.body.EffectiveStartDate,
    empreps: req.body.empreps,
    EndTime: req.body.EndTime,
    Frequency: req.body.Frequency,
    FullPartTime: req.body.FullPartTime,
    GradeId: req.body.GradeId,
    GradeLadderId: req.body.GradeLadderId,
    JobId: req.body.JobId,
    LastUpdateDate: req.body.LastUpdateDate,
    LegalEntityId: req.body.LegalEntityId,
    links: req.body.links,
    LocationId: req.body.LocationId,
    ManagerAssignmentId: req.body.ManagerAssignmentId,
    ManagerId: req.body.ManagerId,
  };
  try {
    const ems = await Employee.findOneAndUpdate(
      { _id: req.params.empID },
      { $push: { assignments: assignmentsobj } },
      { upsert: true }
    );
    res.send(ems);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} update assignment---
router.put('/:empID/child/assignments/:AssignmentID', verifyToken, async (req, res) => {
  // const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.empID));

  try {
    var assignmentsobj = {
      AssignmentId: req.body.AssignmentId,
      ActionCode: req.body.ActionCode,
      ActionReasonCode: req.body.ActionReasonCode,
      ActualTerminationDate: req.body.ActualTerminationDate,
      AssignmentCategory: req.body.AssignmentCategory,
      assignmentDFF: req.body.assignmentDFF,
      assignmentExtraInformation: req.body.assignmentExtraInformation,
      AssignmentName: req.body.AssignmentName,
      AssignmentNumber: req.body.AssignmentNumber,
      AssignmentProjectedEndDate: req.body.AssignmentProjectedEndDate,
      AssignmentStatus: req.body.AssignmentStatus,
      AssignmentStatusTypeId: req.body.AssignmentStatusTypeId,
      BusinessUnitId: req.body.BusinessUnitId,
      CreationDate: req.body.CreationDate,
      DefaultExpenseAccount: req.body.DefaultExpenseAccount,
      DepartmentId: req.body.DepartmentId,
      EffectiveEndDate: req.body.EffectiveEndDate,
      EffectiveStartDate: req.body.EffectiveStartDate,
      empreps: req.body.empreps,
      EndTime: req.body.EndTime,
      Frequency: req.body.Frequency,
      FullPartTime: req.body.FullPartTime,
      GradeId: req.body.GradeId,
      GradeLadderId: req.body.GradeLadderId,
      JobId: req.body.JobId,
      LastUpdateDate: req.body.LastUpdateDate,
      LegalEntityId: req.body.LegalEntityId,
      links: req.body.links,
      LocationId: req.body.LocationId,
      ManagerAssignmentId: req.body.ManagerAssignmentId,
      ManagerId: req.body.ManagerId,
    };
    const assignment = await Employee.update(
      {
        _id: req.params.empID,
        assignments: { $elemMatch: { AssignmentId: parseInt(req.params.AssignmentID) } }
      },
      { $set: { assignments: [assignmentsobj] } }
    )
    console.log(assignment);
    res.send(assignment);
  } catch (error) {
    res.status(500).send(error.message);
  }

});

router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const emp = await Employee.findByIdAndRemove(req.params.id);
    res.send(emp);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
module.exports = router;