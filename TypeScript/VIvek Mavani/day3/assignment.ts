// This project is aimed at developing a web-based and central
//  Recruitment Process System for the HR Group for a company.
//   Some features of this system will be creating vacancies, 
//   storing Applicants data, Interview process initiation, Scheduling Interviews,
//    Storing Interview results for the applicant and finally Hiring of the applicant.
//     Reports may be required to be generated for the use of HR group.
import {Vacancies, ApplicantData, Hiring} from "./model";

var hr = new Hiring();
var applicant = new ApplicantData();
var vacancy  = new Vacancies();


hr.Report();
hr.HiringApplicant();
hr.scheduleInterview();

var results = hr.storingResult();
for(var item of results){
    console.log(item);
}


applicant.setApplicantData({
    ApplicantID:5,
    Name:"Aman",
    Age:22,
    Address:"Ahmedabad",
    vid:3
});
applicant.ShowApplicants();

vacancy.setVacancyData({
    vid:3,
    date:new Date(24-11-2021),
    post:"Flutter", 
    venue:"Ahmdabad",
    TotalSeat:10,
    Salary:20000,
    status:false});
vacancy.removeVacancy(2);