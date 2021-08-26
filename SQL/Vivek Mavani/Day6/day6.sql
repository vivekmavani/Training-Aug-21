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

USE day6sql
--1. Write a query to find the names (first_name, last_name) and salaries of the employees who have higher salary than
--the employee whose last_name='Bull'. 
SELECT FirstName + ' '+ LastName 'names',Salary FROM dbo.Employees
WHERE Salary > (SELECT Salary FROM dbo.Employees WHERE LastName = 'Bull')
--2. Find the names (first_name, last_name) of all employees who works in the IT department. 
SELECT FirstName + ' '+ LastName 'names' FROM dbo.Employees WHERE DepartmentID
IN(SELECT DepartmentID FROM dbo.Departments WHERE DepartmentName = 'IT')

--3. Find the names (first_name, last_name) of the employees who have a manager who works for a department based in United States. 
SELECT FirstName + ' '+ LastName 'names' FROM dbo.Employees WHERE EmployeeID
IN(SELECT ManagerID FROM dbo.Employees WHERE ManagerID IN (SELECT ManagerID FROM dbo.Locations WHERE CountryID = 'US'))

--4. Find the names (first_name, last_name) of the employees who are managers. 
SELECT FirstName + ' '+ LastName 'names' FROM dbo.Employees WHERE EmployeeID 
IN(SELECT ManagerID FROM dbo.Employees)

--5. Find the names (first_name, last_name), salary of the employees whose salary is greater than the average salary. 
SELECT FirstName + ' ' + LastName AS 'names', Salary  FROM dbo.Employees WHERE Salary > (SELECT AVG(Salary) FROM dbo.Employees)

--6. Find the names (first_name, last_name), salary of the employees whose salary is equal to the minimum salary for their job grade.(no data) 
SELECT FirstName + ' ' + LastName AS 'names', Salary FROM dbo.Employees WHERE Salary = (SELECT MIN(Salary) FROM dbo.Employees)
--7. Find the names (first_name, last_name), salary of the employees who earn more than the average salary and who works in any of the IT departments. 
SELECT FirstName + ' ' + LastName AS 'names',Salary FROM dbo.Employees
WHERE Salary > (SELECT AVG(Salary) FROM dbo.Employees)  AND DepartmentID IN (SELECT DepartmentID FROM Departments WHERE DepartmentName = 'IT')
--8. Find the names (first_name, last_name), salary of the employees who earn more than Mr. Bell. 
SELECT FirstName + ' ' + LastName AS 'names',Salary FROM dbo.Employees
WHERE Salary > (SELECT Salary FROM dbo.Employees WHERE LastName = 'Bell')
--9. Find the names (first_name, last_name), salary of the employees who earn the same salary as the minimum salary for all departments. 
SELECT FirstName + ' ' + LastName AS 'names',Salary
FROM dbo.Employees WHERE Salary =(SELECT MIN(Salary) FROM dbo.Employees)

--10. Find the names (first_name, last_name), salary of the employees whose salary greater than average salary of all department. 
SELECT FirstName + ' ' + LastName AS 'names',Salary
FROM dbo.Employees WHERE Salary > ALL(SELECT AVG(Salary) FROM dbo.Employees GROUP BY DepartmentID)

--11. Write a query to find the names (first_name, last_name) and salary of the employees who earn a salary that is higher
--than the salary of all the Shipping Clerk (JOB_ID = 'SH_CLERK'). Sort the results on salary from the lowest to highest. 
SELECT FirstName + ' ' + LastName AS 'names',Salary FROM dbo.Employees
WHERE Salary > ALL(SELECT Salary FROM dbo.Employees WHERE JobId = 'SH_CLERK') ORDER BY Salary ASC


--12. Write a query to find the names (first_name, last_name) of the employees who are not supervisors. 
SELECT FirstName + ' '+ LastName 'names' FROM dbo.Employees WHERE EmployeeID <>ALL
(SELECT ManagerID FROM dbo.Employees)

--13. Write a query to display the employee ID, first name, last names, and department names of all employees. 
SELECT a.FirstName,a.LastName,a.EmployeeID,b.DepartmentName FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID

--14. Write a query to display the employee ID, first name, last names, salary of all employees whose salary is
--above average for their departments. 
SELECT EmployeeID, FirstName,LastName,Salary FROM dbo.Employees a WHERE
Salary > (SELECT AVG(Salary) FROM dbo.Employees WHERE a.DepartmentID = DepartmentID)

--15. Write a query to fetch even numbered records from employees table.
Select * FROM (SELECT ROW_NUMBER() OVER(ORDER BY Salary DESC) Rank,* FROM dbo.Employees)tmm WHERE Rank % 2 = 0
--16. Write a query to find the 5th maximum salary in the employees table. 
SELECT  Salary 
FROM dbo.Employees a 
WHERE 5 = (SELECT COUNT(DISTINCT Salary) 
FROM dbo.Employees b 
WHERE b.Salary >= a.Salary);


--17. Write a query to find the 4th minimum salary in the employees table. 
SELECT DISTINCT Salary 
FROM dbo.Employees a 
WHERE 4 = (SELECT COUNT(DISTINCT Salary) 
FROM dbo.Employees b WHERE b.Salary <= a.Salary)

--18. Write a query to select last 10 records from a table. 
SELECT TOP(10) * FROM dbo.Employees ORDER BY EmployeeID DESC 

--19. Write a query to list department number, name for all the departments in which there are no employees in the department. 
SELECT DepartmentID,DepartmentName 
FROM dbo.Departments WHERE DepartmentID NOT IN (select DepartmentID FROM dbo.Employees)
--20. Write a query to get 3 maximum salaries. 
SELECT DISTINCT TOP(3) Salary FROM dbo.Employees ORDER BY Salary DESC
--21. Write a query to get 3 minimum salaries. 
SELECT DISTINCT TOP(3) Salary FROM dbo.Employees ORDER BY Salary ASC
--22. Write a query to get nth max salaries of employees. 
SELECT DISTINCT TOP(4) Salary FROM dbo.Employees ORDER BY Salary DESC


--1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments. 
GO
CREATE VIEW  Employeesviewsassss1
AS 
SELECT LocationID, StreetAddress, City, StateProvince, CountryName 
FROM dbo.Locations a
 JOIN Countries b ON a.CountryID = b.CountryID
 GO
Select * FROM Employeesviewsassss1
--2. Write a query to find the names (first_name, last name), department ID and name of all the employees. 
GO
CREATE VIEW  Employeesviewsassss2
AS 
SELECT a.FirstName + ' ' + a.LastName 'names', b.DepartmentID, b.DepartmentName 
FROM Employees a
JOIN 
Departments b ON a.DepartmentID = b.DepartmentID
 GO
Select * FROM Employeesviewsassss2

--3. Find the names (first_name, last_name), job, department number, and department name of the employees who work in London. 
GO
CREATE VIEW  Employeesviewsassss3
AS SELECT e.FirstName + ' ' +e.LastName 'names', e.JobId, e.DepartmentID, d.DepartmentName 
FROM dbo.Employees e
JOIN
dbo.Departments d ON (e.DepartmentID = d.DepartmentID) 
JOIN 
dbo.Locations l ON (d.LocationID = l.LocationID) 
WHERE LOWER(l.city) = 'London';
 GO
Select * FROM Employeesviewsassss3
--4. Write a query to find the employee id, name (last_name) along with their manager_id, manager name (last_name). 
GO
CREATE VIEW  Employeesviewsassss4
AS SELECT e.EmployeeID 'Emp_Id', e.LastName 'Employee name', m.EmployeeID 'Mgr_Id', 
m.LastName 'Manager name' 
FROM Employees e 
join Employees m
ON (e.ManagerID = m.EmployeeID);
 GO
Select * FROM Employeesviewsassss4
--5. Find the names (first_name, last_name) and hire date of the employees who were hired after 'Jones'. 
GO
CREATE VIEW  Employeesviewsassss5
AS SELECT e.FirstName + ' ' +e.LastName 'names', e.HireDate
FROM Employees e
JOIN 
Employees davies
ON (davies.LastName = 'Jones')
WHERE davies.HireDate < e.HireDate
 GO
Select * FROM Employeesviewsassss5
--6. Write a query to get the department name and number of employees in the department. 
GO
CREATE VIEW  Employeesviewsassss6
AS SELECT a.DepartmentName  'Department Name', 
COUNT(*)  'No of Employees' 
FROM Departments a
 JOIN Employees b
ON b.DepartmentID = a.DepartmentID 
GROUP BY a.DepartmentID, a.DepartmentName 
ORDER BY a.DepartmentName;
 GO
Select * FROM Employeesviewsassss6
--7. Find the employee ID, job title, number of days between ending date and starting date for all jobs in department 90 from job history. 
GO
CREATE VIEW  Employeesviewsassss7
AS SELECT a.EmployeeID, a.JobID, DATEDIFF(YEAR,a.EndDate,a.StartDate)  Days FROM JobHistory a
 JOIN Employees b
ON a.JobID = b.JobId WHERE  a.DepartmentID=90;
 GO
Select * FROM Employeesviewsassss7
--8. Write a query to display the department ID, department name and manager first name. 
GO
CREATE VIEW  Employeesviewsassss8
AS SELECT d.DepartmentID, d.DepartmentName, e.ManagerID, e.FirstName 
FROM Departments d 
 JOIN Employees e 
ON (d.ManagerID = e.EmployeeID);
 GO
Select * FROM Employeesviewsassss8
--9. Write a query to display the department name, manager name, and city. 
GO
CREATE VIEW  Employeesviewsassss9
AS SELECT d.DepartmentName, e.FirstName, l.City 
FROM Departments d 
JOIN Employees e 
ON (d.ManagerID = e.EmployeeID) 
JOIN locations l ON l.LocationID = d.LocationID 
 GO
Select * FROM Employeesviewsassss9
--10. Write a query to display the job title and average salary of employees. 
GO
CREATE VIEW  Employeesviewsassss10
AS SELECT a.JobId, AVG(salary) 
FROM employees a
 JOIN JobHistory b ON a.JobId = b.JobID
GROUP BY a.JobID; 
 GO
Select * FROM Employeesviewsassss10
--12. Write a query to display the job history that were done by any employee who is currently drawing more than 10000 of salary. 
GO
CREATE VIEW  Employeesviewsassss12
AS SELECT jh.* FROM JobHistory jh 
JOIN employees e 
ON (jh.EmployeeID = e.EmployeeID) 
WHERE salary > 10000;
 GO
Select * FROM Employeesviewsassss12
--13. Write a query to display department name, name (first_name, last_name), hire date, salary of the manager for all managers
--whose experience is more than 15 years. 
GO
CREATE VIEW  Employeesviewsassss13
AS SELECT FirstName, LastName, HireDate, salary, 
(DATEDIFF(YEAR,GETDATE(), HireDate)) Experience 
FROM departments d JOIN employees e 
ON (d.ManagerID = e.EmployeeID) 
WHERE (DATEDIFF(YEAR,GETDATE(), HireDate))>15
 GO
Select * FROM Employeesviewsassss13

-- join to subquery

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT  DATEDIFF(year,e.HireDate,(SELECT  INCENTIVE_DATE FROM 
incentives WHERE employeee_id = e.EmployeeID)) AS [datediff] FROM Employees e

--Select first_name, incentive amount 
--from employee and incentives table for those employees
--who have incentives and incentive amount greater than 3000
SELECT e.FirstName,(SELECT i.incentive_amount FROM 
incentives i WHERE i.employeee_id = e.EmployeeID AND
i.incentive_amount > 3000 AND e.Salary > 3000) AS abcd
FROM Employees e 

--Select first_name, incentive amount from employee and 
--incentives table for all employees even if they didn’t get incentives.
SELECT   e.EmployeeID,e.FirstName,(SELECT incentive_amount  FROM 
incentives WHERE  employeee_id = e.EmployeeID)  FROM Employees e

--Select EmployeeName, ManagerName from the employee table.
SELECT  e.FirstName,(SELECT FirstName  FROM 
Employees WHERE EmployeeID = e.ManagerID)  FROM Employees e

--Select first_name, incentive amount from employee and
--incentives table for all employees even if they didn’t get incentives and
--set incentive amount as 0 for those employees who didn’t get incentives.
SELECT   e.EmployeeID,e.FirstName,IIF(0 != (SELECT incentive_amount  FROM 
incentives WHERE  employeee_id = e.EmployeeID),(SELECT incentive_amount  FROM 
incentives WHERE  employeee_id = e.EmployeeID), 0)  FROM Employees e
