
UPDATE dbo.Employees SET Email='not available';
select * into dbo.Departments2 from dbo.Departments
SELECT * from dbo.Departments
SELECT * from dbo.Employees
SELECT * from dbo.JobHistory
--Write a SQL statement to change the Email and 
--CommissionPct column of employees table with ‘not available’ and 0.10 for all employees.
UPDATE dbo.Employees SET Email='not available', CommissionPct = 0.10;
--Write a SQL statement to change the Email and CommissionPct column of employees
--table with ‘not available’ and 0.10 for those employees whose DepartmentID is 110.
UPDATE dbo.Employees SET Email='not available again', CommissionPct = 0.11 WHERE DepartmentID = 110;

--Write a SQL statement to change the Email column of employees table with ‘not available’ for 
--those employees whose DepartmentID is 80 and gets a commission is less than 20%
UPDATE dbo.Employees SET Email='not available 2' WHERE DepartmentID = 80 AND CommissionPct < 0.20;

--Write a SQL statement to change the Email column of employees table with 
--‘not available’ for those employees who belongs to the ‘Accouning’ department.
UPDATE dbo.Employees SET Email='3 not available'  WHERE DepartmentID = (SELECT DepartmentID FROM 
dbo.Departments2 WHERE DepartmentName = 'Accounting');

--Write a SQL statement to change salary of employee 
--to 8000 whose ID is 105, if the existing salary is less than 5000.
UPDATE dbo.Employees SET Salary=8000 WHERE EmployeeID = 105 AND Salary < 5000;

--Write a SQL statement to change job ID of employee which ID is 118, 
--to SH_CLERK if the employee belongs to department,
--which ID is 30 and the existing job ID does not start with SH.
UPDATE dbo.Employees SET JobID=8000 WHERE EmployeeID = 118 AND DepartmentID = 30 AND NOT JobId LIKE 'SH%';

--Write a SQL statement to increase the salary of employees under the department 40, 90 and 110 
--according to the company rules that, salary will be increased by 25% for the department 40, 15% 
--for department 90 and 10% for the department 110 and the rest of the departments will remain same.
 
UPDATE dbo.Employees SET Salary = CASE DepartmentID 
WHEN 110 THEN Salary+(Salary*0.10) 
WHEN 40 THEN Salary+(Salary*0.25) 
WHEN 90 THEN Salary+(Salary*0.15)  ELSE Salary  END
WHERE DepartmentID = 40 OR 
DepartmentID = 90 OR  DepartmentID = 110

--Write a SQL statement to increase the minimum and maximum salary of PU_CLERK by 2000
--as well as the salary for those employees by 20% and commission by 10% .
UPDATE dbo.Employees SET 
CommissionPct+= 0.10, Salary+=(Salary * 0.20) WHERE JobId = 'PU_CLERK'

--Get all employee details from the Employee table
SELECT * from dbo.Employees
--Get FirstName, LastName from Employees table
SELECT FirstName, LastName from dbo.Employees 
--Get FirstName from Employees table using alias name “Employee Name”
SELECT FirstName AS 'Employee Name' from dbo.Employees 
--Get employee details from Employees table whose Employee Name is “Steven”
SELECT * from dbo.Employees WHERE FirstName = 'Steven'
--Get employee details from Employees table whose Employee Name are “Neena” and “Lex”
SELECT * from dbo.Employees WHERE FirstName = 'Neena' OR FirstName = 'Lex'
--Get employee details from Employees table whose Employee name are not “Neena” and “Neena”
SELECT * from dbo.Employees WHERE NOT FirstName = 'Neena' AND NOT FirstName = 'Lex'
--Get employee details from Employees table whose Salary between 5000 and 8000
SELECT * from dbo.Employees WHERE Salary BETWEEN  5000 AND 8000
--Write a query to get the names (FirstName, LastName), Salary, 
--PF of all the Employees (PF is calculated as 12% of salary).
SELECT CONCAT(FirstName,' ', LastName) AS 'names',Salary * 0.12 AS 'PF',Salary from dbo.Employees
--Get employee details from Employees table whose FirstName starts with ‘N’
SELECT * from dbo.Employees WHERE FirstName LIKE 'N%' 
--Write a query to get unique department ID from Employees table
SELECT DISTINCT DepartmentID from dbo.Employees 
--Write a query to get all employee details from the employee table order by FirstName, descending.
SELECT * from dbo.Employees   ORDER BY FirstName DESC
--Write a query to get the EmployeeID, names (FirstName, LastName), salary in ascending order of salary.
SELECT EmployeeID,CONCAT(FirstName,' ', LastName) AS 'names', Salary 
FROM dbo.Employees ORDER BY Salary ASC
--Select TOP 2 salary from employee table
SELECT TOP 2 Salary FROM dbo.Employees 