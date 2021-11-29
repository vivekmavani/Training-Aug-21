"use strict";
exports.__esModule = true;
// This project is aimed at developing a web-based and central
//  Recruitment Process System for the HR Group for a company.
//   Some features of this system will be creating vacancies, 
//   storing Applicants data, Interview process initiation, Scheduling Interviews,
//    Storing Interview results for the applicant and finally Hiring of the applicant.
//     Reports may be required to be generated for the use of HR group.
var model_1 = require("./model");
var hr = new model_1.Hiring();
var applicant = new model_1.ApplicantData();
var vacancy = new model_1.Vacancies();
hr.Report();
hr.HiringApplicant();
hr.scheduleInterview();
var results = hr.storingResult();
for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
    var item = results_1[_i];
    console.log(item);
}
applicant.setApplicantData({
    ApplicantID: 5,
    Name: "Aman",
    Age: 22,
    Address: "Ahmedabad",
    vid: 3
});
applicant.ShowApplicants();
vacancy.setVacancyData({
    vid: 3,
    date: new Date(24 - 11 - 2021),
    post: "Flutter",
    venue: "Ahmdabad",
    TotalSeat: 10,
    Salary: 20000,
    status: false
});
vacancy.removeVacancy(2);
