//Create a Restful API to create an employee,get all employees, get an employees,get an employee,update and employee
var employee = require('./data');
var express = require('express');
var validation = require('./validation');
var app = express();
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

//http://localhost:3000/emps get all employees
router.get('/emps',verifyToken, (req, res) => {
    res.send(employee.employee);
});

//http://localhost:3000/emps/1 get an employee
router.get('/emps/:id',verifyToken, (req, res) => {
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.id));
    if (!emp) return res.status(404).send('The employee with given id was not found');
    res.send(emp);
});

//http://localhost:3000/emps create an employee
router.post('/emps',verifyToken, (req, res) => {
    const { error } = validation.employee(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const employeess = {
        LegalEntityId: employee.employee.length + 1,
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
    employee.employee.push(employeess);
    res.send(employeess);
});
//http://localhost:3000/emps/1 update an employee
router.put('/emps/:id',verifyToken, (req, res) => {
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.id));
    if (!emp) return res.status(404).send('The employee with given id was not found');

    //obj desrch.
    const { error } = validation.employee(req.body);

    if (error) return res.status(400).send(error.details[0].message);


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

    res.send(emp);

});


//http://localhost:3000/emps/{empID}/child/assignments get all assignments
router.get('/emps/:empID/child/assignments',verifyToken, (req, res) => {
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.empID));
    if (!emp) return res.status(404).send('The employee with given id was not found');

    res.send(emp.assignments);
});

//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} get assignment by assignmentis
router.get('/emps/:empID/child/assignments/:AssignmentID',verifyToken, (req, res) => {
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.empID));
    if (!emp) return res.status(404).send('The employee with given id was not found');

    const ass = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.AssignmentID));
    if (!ass) return res.status(404).send('The Assignment with given id was not found');

    res.send(emp.assignments);
});

//http://localhost:3000/emps/{empID}/child/assignments create assignment
router.post('/emps/:empID/child/assignments',verifyToken, (req, res) => {
    const { error } = validation.assignment(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.empID));
    if (!emp) return res.status(404).send('The employee with given id was not found');
    var assignmentsobj = {
        AssignmentId: emp.assignments.length  + 1,
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
    emp.assignments.push(assignmentsobj);
    res.send(assignmentsobj);
});

//http://localhost:3000/emps/{empID}/child/assignments/{AssignmentID} update assignment
router.put('/emps/:empID/child/assignments/:AssignmentID',verifyToken, (req, res) => {
    const emp = employee.employee.find(c => c.LegalEntityId === parseInt(req.params.empID));
    if (!emp) return res.status(404).send('The employee with given id was not found');

    const assignment = emp.assignments.find(c => c.AssignmentId === parseInt(req.params.AssignmentID));
    if (!assignment) return res.status(404).send('The assignment with given id was not found');

    //obj desrch.
    const { error } = validation.assignment(req.body);

    if (error) return res.status(400).send(error.details[0].message);


    assignment.AssignmentId= req.body.AssignmentID;
    assignment.ActionCode= req.body.ActionCode,
    assignment.ActionReasonCode= req.body.ActionReasonCode,
    assignment.ActualTerminationDate= req.body.ActualTerminationDate,
    assignment.AssignmentCategory= req.body.AssignmentCategory,
    assignment.assignmentDFF= req.body.assignmentDFF,
    assignment.assignmentExtraInformation= req.body.assignmentExtraInformation,
    assignment.AssignmentName= req.body.AssignmentName,
    assignment.AssignmentNumber= req.body.AssignmentNumber,
    assignment.AssignmentProjectedEndDate= req.body.AssignmentProjectedEndDate,
    assignment.AssignmentStatus= req.body.AssignmentStatus,
    assignment.AssignmentStatusTypeId= req.body.AssignmentStatusTypeId,
    assignment.BusinessUnitId= req.body.BusinessUnitId,
    assignment.CreationDate= req.body.CreationDate,
    assignment.DefaultExpenseAccount= req.body.DefaultExpenseAccount,
    assignment.DepartmentId= req.body.DepartmentId,
    assignment.EffectiveEndDate= req.body.EffectiveEndDate,
    assignment.EffectiveStartDate= req.body.EffectiveStartDate,
    assignment.empreps= req.body.empreps,
    assignment.EndTime= req.body.EndTime,
    assignment.Frequency= req.body.Frequency,
    assignment.FullPartTime= req.body.FullPartTime,
    assignment.GradeId= req.body.GradeId,
    assignment.GradeLadderId= req.body.GradeLadderId,
    assignment.JobId= req.body.JobId,
    assignment.LastUpdateDate= req.body.LastUpdateDate,
    assignment.LegalEntityId= req.body.LegalEntityId,
    assignment.links= req.body.links,
    assignment.LocationId= req.body.LocationId,
    assignment.ManagerAssignmentId= req.body.ManagerAssignmentId,
    assignment.ManagerId= req.body.ManagerId,

    res.send(emp);

});
module.exports = router;