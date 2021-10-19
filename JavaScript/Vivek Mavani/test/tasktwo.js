
// This project is aimed at developing a web-based and central Recruitment Process System 
// for the HR Group for a company. Some features of this system will be creating vacancies,
//  storing Applicants data, Interview process initiation, Scheduling Interviews, Storing
//   Interview results for the applicant and finally Hiring of the applicant. Reports may 
//   be required to be generated for the use of HR group.

var employee1 = {
    ID : 1,
    FirstName : "vivek1",
    LastName: "mavani1",
    Address : "bhavnagar1",
    Exp : 1,
    Edu : "BE",
    CPI : 8.0,
    VID  :1,
}
var employee2 = {
    ID : 2,
    FirstName : "vivek2",
    LastName: "mavani2",
    Address : "bhavnagar2",
    Exp : 1,
    Edu : "BE",
    CPI : 7.0,
    VID  :2,
}
var employee3 = {
    ID : 3,
    FirstName : "vivek3",
    LastName: "mavani3",
    Address : "bhavnagar3",
    Exp : 1,
    Edu : "BE",
    CPI : 7.0,
    VID  :3,
}
var employee4 = {
    ID : 4,
    FirstName : "vivek4",
    LastName: "mavani4",
    Address : "bhavnagar4",
    Exp : 0,
    Edu : "BE",
    CPI : 7.0,
    VID  :4,
}
var vacancies1 = {
    VID : 1,
    Position : "Python Developer",
    Exp : 10,
    Salary : 60000,
    Edu : "BE",
    CPI : 7.0,
}
var vacancies2 = {
    VID : 2,
    Position : "PHP Developer",
    Exp : 1,
    Salary : 10000,
    Edu : "BE",
    CPI : 7.0,
}
var vacancies3 = {
    VID : 3,
    Position : ".NET Developer",
    Exp : 1,
    Salary : 30000,
    Edu : "ANY",
    CPI : 8.0,

}
var vacancies4 = {
    VID : 4,
    Position : "WordPress Developer",
    Exp : 4,
    Salary : 20000,
    Edu : "BE",
    CPI : 6.0,
}
var vacancies5 = {
    VID : 5,
    Position : "Android Developer",
    Exp : 0,
    Salary : 20000,
    Edu : "BE",
    CPI : 8.0,
}
//creating vacancies
var vacancies = [vacancies1];
vacancies.push(vacancies2);
vacancies.push(vacancies3);
vacancies.push(vacancies4);
//data of allapplicant
var allapplicant = [employee1];
allapplicant.push(employee2);
allapplicant.push(employee3);
allapplicant.push(employee4);


var interview = [];
var count = 1;
//aligible for interview
for(var i=0;i<allapplicant.length;i++)
{
    for(var j = 0; j<vacancies.length; j++)
    {
        if(allapplicant[i].VID == vacancies[j].VID)
        {
            if(allapplicant[i].CPI >= vacancies[j].CPI && 
                allapplicant[i].Edu == vacancies[j].Edu && 
                allapplicant[i].Exp == vacancies[j].Exp)
                {
                    interview.push({
                       ID : allapplicant[i].ID,
                       Position :  vacancies[j].Position,
                       Salary :  vacancies[j].Salary,
                      FirstName : allapplicant[i].FirstName,
                      LastName: allapplicant[i].LastName,
                      Address : allapplicant[i].Address,
                      Exp : allapplicant[i].Exp,
                      Edu : allapplicant[i].Edu,
                      CPI : allapplicant[i].CPI,
                      Time : count++  + " PM",
                      Marks : 0,
                    });
                }
        }
    }
}
counts = 100;
// enter marks 
for(var w = 0; w< interview.length;w++)
{
    interview[w].Marks = counts++;
    
}
// Display final 

    for(var a of interview)
    {
        console.log("-----------Display final Applicants For HR group----------------");
        console.log("ID: " + a.ID);
        console.log("Marks: " + a.Marks);
        console.log("FullName: " +a.FirstName +" " +a.LastName);
         console.log("Address: " +a.Address);
        console.log("Edu: " +a.Edu);
        console.log("Exp: " + a.Exp);
        console.log("Salary: " +a.Salary);
        console.log("CPI: " + a.CPI);
        console.log("Exp: " + a.Position);
        console.log("---------------------------");
    }

