USE daytwo
--1 Select employee details from employee table if data exists in incentive table ?
SELECT * FROM dbo.Employees WHERE EXISTS (Select * FROM dbo.incentives)


--2 Find Salary of the employee whose salary is more than Roy Salary
SELECT Salary FROM dbo.Employees WHERE Salary > (SELECT Salary FROM dbo.Employees WHERE FirstName = 'Roy')

--3 Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
USE daytwo
GO
CREATE VIEW   Employeesview
AS 
SELECT a.FirstName,a.LastName,a.Salary,a.HireDate, b.incentive_amount,b.INCENTIVE_DATE FROM dbo.Employees a JOIN dbo.incentives b ON 
a.EmployeeID = b.employeee_id
GO
Select * FROM Employeesview
GO
--4 Create a view to select Select first_name, incentive amount from employee and incentives table for those
--employees who have incentives and incentive amount greater than 3000
USE daytwo
GO
CREATE VIEW   Employeesviews
AS 
SELECT e.FirstName,i.incentive_amount FROM dbo.Employees e JOIN incentives i 
ON e.EmployeeID = i.employeee_id WHERE i.incentive_amount > 3000 AND e.Salary > 3000
GO
Select * FROM Employeesviews
GO

--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London
USE day6sql
GO
CREATE VIEW  Employeesviewsa
AS 
SELECT a.FirstName + ' ' +a.LastName AS 'names',a.JobId,b.DepartmentName FROM dbo.Employees a JOIN dbo.Departments b 
ON a.DepartmentID = b.DepartmentID WHERE b.LocationID IN (Select LocationID FROM dbo.Locations WHERE City = 'London')
GO
Select * FROM Employeesviewsa
GO

--Create a View to get the department name and number of employees in the department.
CREATE VIEW  Employeesviewsas
AS 
SELECT b.DepartmentName AS 'Department Name', COUNT(*) AS 'No of Employees' 
FROM dbo.Departments b JOIN dbo.Employees  a
ON a.DepartmentID = b.DepartmentID 
GROUP BY b.DepartmentID, b.DepartmentName
GO
Select * FROM Employeesviewsas
GO

--Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.
CREATE VIEW  Employeesviewsass
AS 
SELECT b.EmployeeID, a.JobID, DATEDIFF(DAYOFYEAR,a.StartDate,a.EndDate) Days FROM dbo.JobHistory a
 JOIN dbo.Employees b ON a.DepartmentID = b.DepartmentID WHERE b.DepartmentID=90;
 GO
Select * FROM Employeesviewsass
GO
--Write a View to display the department name, manager name, and city.
CREATE VIEW  Employeesviewsasss
AS 
SELECT b.DepartmentName,c.FirstName,d.City FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID JOIN dbo.Employees c
ON c.EmployeeID = b.ManagerID JOIN dbo.Locations d ON d.LocationID = b.LocationID 
GO
Select * FROM Employeesviewsasss
GO
--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager
--for all managers whose experience is more than 15 years.
CREATE VIEW  Employeesviewsassss
AS 
SELECT b.DepartmentName,c.FirstName + ' ' + c.LastName AS 'name',a.HireDate,a.Salary FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID JOIN dbo.Employees c
ON c.EmployeeID = b.ManagerID JOIN dbo.JobHistory d ON d.EmployeeID = c.EmployeeID WHERE DATEDIFF(DAYOFYEAR,d.StartDate,d.EndDate) > 15
GO
Select * FROM Employeesviewsassss
GO

--SubQuery
USE daytwo
--1 Select employee details from employee table if data exists in incentive table ?
SELECT * FROM dbo.Employees WHERE EXISTS (Select * FROM dbo.incentives)


--2 Find Salary of the employee whose salary is more than Roy Salary
SELECT Salary FROM dbo.Employees WHERE Salary > (SELECT Salary FROM dbo.Employees WHERE FirstName = 'Roy')

--3 Create a view to select FirstName,LastName,Salary,JoiningDate,IncentiveDate and IncentiveAmount
USE daytwo
GO
CREATE VIEW   Employeesview
AS 
SELECT a.FirstName,a.LastName,a.Salary,a.HireDate, b.incentive_amount,b.INCENTIVE_DATE FROM dbo.Employees a JOIN dbo.incentives b ON 
a.EmployeeID = b.employeee_id
GO
Select * FROM Employeesview
GO
--4 Create a view to select Select first_name, incentive amount from employee and incentives table for those
--employees who have incentives and incentive amount greater than 3000
USE daytwo
GO
CREATE VIEW   Employeesviews
AS 
SELECT e.FirstName,i.incentive_amount FROM dbo.Employees e JOIN incentives i 
ON e.EmployeeID = i.employeee_id WHERE i.incentive_amount > 3000 AND e.Salary > 3000
GO
Select * FROM Employeesviews
GO

--Create a View to Find the names (first_name, last_name), job, department number, and department name of the employees who work in London
USE day6sql
GO
CREATE VIEW  Employeesviewsa
AS 
SELECT a.FirstName + ' ' +a.LastName AS 'names',a.JobId,b.DepartmentName FROM dbo.Employees a JOIN dbo.Departments b 
ON a.DepartmentID = b.DepartmentID WHERE b.LocationID IN (Select LocationID FROM dbo.Locations WHERE City = 'London')
GO
Select * FROM Employeesviewsa
GO

--Create a View to get the department name and number of employees in the department.
CREATE VIEW  Employeesviewsas
AS 
SELECT b.DepartmentName AS 'Department Name', COUNT(*) AS 'No of Employees' 
FROM dbo.Departments b JOIN dbo.Employees  a
ON a.DepartmentID = b.DepartmentID 
GROUP BY b.DepartmentID, b.DepartmentName
GO
Select * FROM Employeesviewsas
GO

--Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history.
CREATE VIEW  Employeesviewsass
AS 
SELECT b.EmployeeID, a.JobID, DATEDIFF(DAYOFYEAR,a.StartDate,a.EndDate) Days FROM dbo.JobHistory a
 JOIN dbo.Employees b ON a.DepartmentID = b.DepartmentID WHERE b.DepartmentID=90;
 GO
Select * FROM Employeesviewsass
GO
--Write a View to display the department name, manager name, and city.
CREATE VIEW  Employeesviewsasss
AS 
SELECT b.DepartmentName,c.FirstName,d.City FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID JOIN dbo.Employees c
ON c.EmployeeID = b.ManagerID JOIN dbo.Locations d ON d.LocationID = b.LocationID 
GO
Select * FROM Employeesviewsasss
GO
--Create a View to display department name, name (first_name, last_name), hire date, salary of the manager
--for all managers whose experience is more than 15 years.
CREATE VIEW  Employeesviewsassss
AS 
SELECT b.DepartmentName,c.FirstName + ' ' + c.LastName AS 'name',a.HireDate,a.Salary FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID JOIN dbo.Employees c
ON c.EmployeeID = b.ManagerID JOIN dbo.JobHistory d ON d.EmployeeID = c.EmployeeID WHERE DATEDIFF(DAYOFYEAR,d.StartDate,d.EndDate) > 15
GO
Select * FROM Employeesviewsassss
GO
