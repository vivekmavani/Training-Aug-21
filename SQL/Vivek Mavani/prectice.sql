--------------- Practice -------------------
	--------------- Create Statement -------------
--1. Write a SQL statement to create a simple table countries including columns c
--ountry_id,country_name and region_id. make sure that the column country_id will
--be unique and store an auto incremented value.
 USE practice
CREATE TABLE countries
(
country_id int not null PRIMARY KEY IDENTITY(1,1),
country_name varchar(20),
region_id int not null
)

--2. Write a SQL statement to create a simple table countries including columns 
--country_id, country_name and region_id which is already exists.
     USE practice
GO
IF OBJECT_ID('countries', 'U') IS NOT NULL
BEGIN
PRINT 'Table exists.'
END
ELSE
BEGIN
CREATE TABLE countries
(
country_id int not null PRIMARY KEY IDENTITY(1,1),
country_name varchar(20),
region_id int not null
)
END

--3. Write a SQL statement to create the structure of a table dup_countries similar to countries.
Select * Into dup_countries From countries WHERE 1=0

--4. Write a SQL statement to create a duplicate copy of countries table including 
--structure and data by name dup_data_countries.
Select * Into dup_countries From countries 

--5. Write a SQL statement to create a table countries set a constraint NULL.
CREATE TABLE countries
(
country_id int not null PRIMARY KEY IDENTITY(1,1),
country_name varchar(20),
region_id int not null
)

--6. Write a SQL statement to create a table named jobs including columns job_id, job_title, 
--min_salary, max_salary and check whether the max_salary amount exceeding the upper limit 25000.
CREATE TABLE jobs
(
job_id int not null PRIMARY KEY IDENTITY(1,1),    
job_title varchar(20), 
min_salary money,
max_salary money check(max_salary <= 25000)
)

--7. Write a SQL statement to create a table named countries including columns country_id,
--country_name and region_id and make sure that no countries except Italy, India and China will 
--be entered in the table. and combination of columns country_id and region_id will be unique.
CREATE TABLE countries
(
country_id int not null PRIMARY KEY IDENTITY(1,1),    
country_name varchar(20) check(country_name IN ('Italy', 'India','China')), 
region_id int,
)


--8. Write a SQL statement to create a table named job_history including columns employee_id,
--start_date, end_date, job_id and department_id and make sure that the value against column 
--end_date will be entered at the time of insertion to the format like '--/--/----'.
CREATE TABLE job_history
(
employee_id int not null PRIMARY KEY IDENTITY(1,1),
start_date date not null,
end_date date not null check(end_date LIKE '__/__/___'),
job_id int not null,
department_id int not null
)


--9. Write a SQL statement to create a table named jobs including columns job_id, job_title, 
--min_salary and max_salary, and make sure that, the default value for job_title is blank 
--and min_salary is 8000 and max_salary is NULL will be entered automatically at the time of 
--insertion if no value assigned for the specified columns.
CREATE TABLE jobs
(
job_id int not null PRIMARY KEY IDENTITY(1,1),    
job_title  varchar(20) default ' ', 
min_salary money,
max_salary money check(max_salary <= 25000)
)

--10. Write a SQL statement to create a table job_history including columns employee_id,
--start_date, end_date, job_id and department_id and make sure that, the employee_id column 
--does not contain any duplicate value at the time of insertion and the foreign key column 
--job_id contain only those values which are exists in the jobs table.    

--Here is the structure of the table jobs;

+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| JOB_ID     | varchar(10)  | NO   | PRI |         |       |
| JOB_TITLE  | varchar(35)  | NO   |     | NULL    |       |
| MIN_SALARY | decimal(6,0) | YES  |     | NULL    |       |
| MAX_SALARY | decimal(6,0) | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+

CREATE TABLE job_history
(
employee_id int not null PRIMARY KEY IDENTITY(1,1),
start_date date not null,
end_date date not null check(end_date LIKE '__/__/___'),
job_id varchar(10)  not null CONSTRAINT fk_job_id FOREIGN KEY REFERENCES jobs(JOB_ID)  ON DELETE CASCADE ON UPDATE CASCADE,
department_id int not null
)

--11. Write a SQL statement to create a table employees including columns employee_id,
--first_name, last_name, email, phone_number hire_date, job_id, salary, commission, manager_id
--and department_id and make sure that, the employee_id column does not contain any duplicate value
--at the time of insertion and the foreign key columns combined by department_id and manager_id columns
--contain only those unique combination values, which combinations are exists in the departments table.

--Assume the structure of departments table below.
 
+-----------------+--------------+------+-----+---------+-------+
| Field           | Type         | Null | Key | Default | Extra |
+-----------------+--------------+------+-----+---------+-------+
| DEPARTMENT_ID   | decimal(4,0) | NO   | PRI | 0       |       |
| DEPARTMENT_NAME | varchar(30)  | NO   |     | NULL    |       |
| MANAGER_ID      | decimal(6,0) | NO   | PRI | 0       |       |
| LOCATION_ID     | decimal(4,0) | YES  |     | NULL    |       |
+-----------------+--------------+------+-----+---------+-------+

CREATE TABLE employees 
(    
employee_id int not null PRIMARY KEY IDENTITY(1,1),
first_name varchar(20),
last_name varchar(20),
email nvarchar(50) CHECK(Email LIKE '%_@__%.__%'),
phone_number nvarchar(10) CHECK(phone_number LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
hire_date date not null,
job_id varchar(10), 
salary decimal(6,0), 
commission decimal(6,0),
manager_id decimal(6,0) FOREIGN KEY REFERENCES departments(MANAGER_ID) ON DELETE CASCADE ON UPDATE CASCADE,
department_id decimal(4,0) FOREIGN KEY REFERENCES departments(DEPARTMENT_ID) ON DELETE CASCADE ON UPDATE CASCADE
)


--12. Write a SQL statement to create a table employees including columns employee_id, first_name, 
--last_name, email, phone_number hire_date, job_id, salary, commission, manager_id and department_id
--and make sure that, the employee_id column does not contain any duplicate value at the time of
--insertion, and the foreign key column department_id, reference by the column department_id of 
--departments table, can contain only those values which are exists in the departments table and another
--foreign key column job_id, referenced by the column job_id of jobs table, can contain only those values
--which are exists in the jobs table. 

CREATE TABLE employees 
(
employee_id int not null PRIMARY KEY IDENTITY(1,1),
first_name varchar(20),
last_name varchar(20),
email nvarchar(50) CHECK(Email LIKE '%_@__%.__%'),
phone_number nvarchar(10) CHECK(phone_number LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
hire_date date not null,
job_id varchar(10) FOREIGN KEY REFERENCES jobs(JOB_ID) ON DELETE CASCADE ON UPDATE CASCADE, 
salary decimal(6,0), 
commission decimal(6,0),
manager_id decimal(6,0) FOREIGN KEY REFERENCES departments(MANAGER_ID) ON DELETE CASCADE ON UPDATE CASCADE,
department_id decimal(4,0) FOREIGN KEY REFERENCES departments(DEPARTMENT_ID) ON DELETE CASCADE ON UPDATE CASCADE
)

--Assume that the structure of two tables departments and jobs.

+-----------------+--------------+------+-----+---------+-------+
| Field           | Type         | Null | Key | Default | Extra |
+-----------------+--------------+------+-----+---------+-------+
| DEPARTMENT_ID   | decimal(4,0) | NO   | PRI | 0       |       |
| DEPARTMENT_NAME | varchar(30)  | NO   |     | NULL    |       |
| MANAGER_ID      | decimal(6,0) | YES  |     | NULL    |       |
| LOCATION_ID     | decimal(4,0) | YES  |     | NULL    |       |
+-----------------+--------------+------+-----+---------+-------+


+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| JOB_ID     | varchar(10)  | NO   | PRI |         |       |
| JOB_TITLE  | varchar(35)  | NO   |     | NULL    |       |
| MIN_SALARY | decimal(6,0) | YES  |     | NULL    |       |
| MAX_SALARY | decimal(6,0) | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+

      --------------Insert Statement-------------------

--1. Write a SQL statement to insert a record with your own value into the table countries
--against each columns.and region_id.
INSERT INTO countries VALUES(1,'India',2),(2,'China',3),(3,'Italy',4)

--2. Write a SQL statement to insert one row into the table countries against the column country_id and country_name.
INSERT INTO countries(country_id,country_name) VALUES(1,'India') 

--3.Write a SQL statement to insert 3 rows by a single insert statement.
INSERT INTO countries VALUES(1,'India',2),(2,'China',3),(3,'Italy',4)

--4. Write a SQL statement insert rows from country_new table to countries table.
INSERT INTO countries SELECT * FROM country_new

--5. Here is the rows to insert for country_new table. Assume that, the countries table is empty.
INSERT INTO country_new VALUES('C0001','India',1001),('C0002','USA',1007),('C0003','UK',1003)
+------------+--------------+-----------+
| COUNTRY_ID | COUNTRY_NAME | REGION_ID |
+------------+--------------+-----------+
| C0001      | India        |      1001 |
| C0002      | USA          |      1007 |
| C0003      | UK           |      1003 |
+------------+--------------+-----------+


--6.Write a SQL statement to insert one row in jobs table to ensure that no duplicate value 
--will be entered in the job_id column.
INSERT INTO jobs VALUES(1001,'OFFICER',1000);

--9. Write a SQL statement to insert a record into the table countries to ensure that, 
--a country_id and region_id combination will be entered once in the table.
  INSERT INTO jobs VALUES(1001,'OFFICER',1000);

--10. Write a SQL statement to insert rows into the table countries in which the value 
--of country_id column will be unique and auto incremented.
INSERT INTO countries VALUES('India',1)

--11. Write a SQL statement to insert records into the table countries to ensure that the 
--country_id column will not contain any duplicate data and this will be automatically incremented 
--and the column country_name will be filled up by 'N/A' if no value assigned for that column.
CREATE TABLE countries
(
country_id int not null PRIMARY KEY IDENTITY(1,1),    
country_name varchar(20) DEFAULT 'N/A' , 
region_id int,
)
INSERT INTO countries VALUES(2,'',1)

--12. Write a SQL statement to insert rows in the job_history table in which one column 
--job_id is containing those values which are exists in job_id column of jobs table.
INSERT INTO job_history VALUES(2,'SDE1'),(3,'SDE2')

--13. Write a SQL statement to insert rows into the table employees in which a set of 
--columns department_id and manager_id contains a unique value and that combined values 
--must have exists into the table departments.
INSERT INTO departments VALUES(1,'SDE1',1,1)
INSERT INTO departments VALUES(2,'SDE2',2,1)
INSERT INTO departments VALUES(3,'SDE3',3,2)

--14. Write a SQL statement to insert rows into the table employees in which a set of 
--columns department_id and job_id contains the values which must have exists into the table departments and jobs.
INSERT INTO employees VALUES(1,'a','b','c',8000,21,6)
INSERT INTO employees VALUES(2,'d','e','f',8000,21,8)

---------- Update Queries -----------------

CREATE TABLE  Employees (
    EmployeeID decimal(6,0) NOT NULL DEFAULT '0',
	FirstName varchar(20) DEFAULT NULL,
	LastName varchar(25) NOT NULL,
	Email varchar(25) NOT NULL,
	PhoneNumber varchar(20) DEFAULT NULL,
	HireDate date NOT NULL,
	JobId varchar(10) NOT NULL,
	Salary decimal(8,2) DEFAULT NULL,
	CommissionPct decimal(2,2) DEFAULT NULL,
	ManagerID decimal(6,0) DEFAULT NULL,
	DepartmentID decimal(4,0) DEFAULT NULL,
	CONSTRAINT pkEmployeeID PRIMARY KEY (EmployeeID),
	CONSTRAINT ukEmail UNIQUE  (Email),
 )
--1) Write a SQL statement to change the Email column of Employees table with 'not available' for all employees.
UPDATE dbo.Employees SET Email='not available'

--2) Write a SQL statement to change the Email and CommissionPct column of employees
--table with 'not available' and 0.10 for all employees.
UPDATE dbo.Employees SET Email='not available', CommissionPct = 0.10;
--3) Write a SQL statement to change the Email and CommissionPct column of 
--employees table with 'not available' and 0.10 for those employees whose DepartmentID is 110.
UPDATE dbo.Employees SET Email='not available again', CommissionPct = 0.11 WHERE DepartmentID = 110;
--4)  Write a SQL statement to change the Email column of employees table with
--'not available' for those employees whose DepartmentID is 80 and gets a commission is less than 20%
UPDATE dbo.Employees SET Email='not available 2' WHERE DepartmentID = 80 AND CommissionPct < 0.20;
--5)  Write a SQL statement to change the Email column of employees table with 
--'not available' for those employees who belongs to the 'Accouning' department.
UPDATE dbo.Employees SET Email='3 not available'  WHERE DepartmentID = (SELECT DepartmentID FROM 
dbo.Departments2 WHERE DepartmentName = 'Accounting');
--6)  Write a SQL statement to change salary of employee to 8000 whose ID is 105,
--if the existing salary is less than 5000.
UPDATE dbo.Employees SET Salary=8000 WHERE EmployeeID = 105 AND Salary < 5000;
--7) Write a SQL statement to change job ID of employee which ID is 118, 
--to SH_CLERK if the employee belongs to department, which ID is 30 and the existing job ID does not start with SH.
UPDATE dbo.Employees SET JobID=8000 WHERE EmployeeID = 118 AND DepartmentID = 30 AND NOT JobId LIKE 'SH%';
--8) Write a SQL statement to increase the salary of employees under the department 40,
--90 and 110 according to the company rules that, salary will be increased by 25% for 
--the department 40, 15% for department 90 and 10% for the department 110 and the rest
--of the departments will remain same.
UPDATE dbo.Employees SET Salary = CASE DepartmentID 
WHEN 110 THEN Salary+(Salary*0.10) 
WHEN 40 THEN Salary+(Salary*0.25) 
WHEN 90 THEN Salary+(Salary*0.15)  ELSE Salary  END
WHERE DepartmentID = 40 OR 
DepartmentID = 90 OR  DepartmentID = 110
--9) Write a SQL statement to increase the minimum and maximum salary of PU_CLERK
--by 2000 as well as the salary for those employees by 20% and commission by 10% .
UPDATE dbo.Employees SET 
CommissionPct+= 0.10, Salary+=(Salary * 0.20) WHERE JobId = 'PU_CLERK'

----------Alter Queries---------
--1. Write a SQL statement to rename the table countries to country_new using sp(store procedure).
 EXEC sp_rename 'countries','country_new'

--2. Write a SQL statement to add a column region_id to the table locations.
ALTER TABLE locations ADD region_id int 
--3. Write a SQL statement to add a columns ID of the table locations.
ALTER TABLE locations ADD ID int 
--4. Write a SQL statement to add a column region_id after state_province to the table locations.
ALTER TABLE locations ADD AFTER state_province, region_id int 
    
--5. Write a SQL statement change the data type of the column country_id to integer in the table locations.
ALTER TABLE locations ALTER COLUMN country_id int

--6. Write a SQL statement to drop the column city from the table locations.
ALTER TABLE locations DROP COLUMN city 

--7. Write a SQL statement to change the name of the column state_province to state, keeping the data type and size same.
EXEC sp_rename 'state_province','state','column'
--8. Write a SQL statement to add a primary key for the columns location_id in the locations table.
ALTER TABLE locations ADD PRIMARY KEY(location_id)

--9. Write a SQL statement to add a primary key fo r a combination of columns location_id and country_id.
ALTER TABLE locations ADD CONSTRAINT abc  PRIMARY KEY(location_id,country_id)

--10. Write a SQL statement to drop the existing primary from the table locations on a combination of columns location_id and country_id.
ALTER TABLE locations DROP CONSTRAINT abc

--11. Write a SQL statement to add a foreign key on job_id column of job_history table referencing to the primary key job_id of jobs table.
ALTER TABLE job_history ADD FOREIGN KEY(job_id) REFERENCES jobs(job_id)

--12. Write a SQL statement to add a foreign key constraint named fk_job_id on job_id column of job_history table referencing to the primary key job_id of jobs table.
ALTER TABLE job_history ADD CONSTRAINT fk_job_id FOREIGN KEY (job_id) REFERENCES jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE

--13. Write a SQL statement to drop the existing foreign key fk_job_id from job_history table on job_id column which is referencing to the job_id of jobs table.
ALTER TABLE job_history DROP CONSTRAINT  fk_job_id
--14. Write a SQL statement to add an index named indx_job_id on job_id column in the table job_history.
ALTER TABLE job_history ADD INDEX indx_job_id(job_id)
--15. Write a SQL statement to drop the index indx_job_id from job_history table.
ALTER TABLE job_history DROP INDEX indx_job_id

--text/varchar/nvarchar


-------SELECT-------
--1) Write a query to display the names (first_name, last_name) using alias name “First Name", "Last Name"
SELECT first_name + ' '+last_name AS 'names' FROM  dbo.Employees
--2) Write a query to get unique department ID from employee table.
SELECT DISTINCT department_id from dbo.Employees 
--3)Write a query to get all employee details from the employee table order by first name, descending.
SELECT * from dbo.Employees   ORDER BY first_name DESC
--4)Write a query to get the names (first_name, last_name), salary, PF of all the employees
--(PF is calculated as 12% of salary).
SELECT CONCAT(first_name,' ', last_name) AS 'names',Salary * 0.12 AS 'PF',Salary from dbo.Employees

--5)Write a query to get the employee ID, names (first_name, last_name), salary in ascending order of salary.
SELECT employee_id,CONCAT(first_name,' ', last_name) AS 'names', Salary 
FROM dbo.Employees ORDER BY Salary ASC
--6) Write a query to get the total salaries payable to employees.
SELECT SUM(Salary) FROM dbo.Employees
 --7)Write a query to get the maximum and minimum salary from employees table.
 SELECT Max(Salary),MIN(salary) FROM dbo.Employees
--8)Write a query to get the average salary and number of employees in the employees table.
SELECT AVG(Salary) FROM dbo.employees
--9)Write a query to get the number of employees working with the company.
SELECT  COUNT(*) FROM dbo.employees
--10)Write a query to get the number of jobs available in the employees table.
USE day6sql
SELECT * FROM dbo.Employees 
SELECT COUNT(DISTINCT JobId) FROM dbo.Employees
--11)Write a query get all first name from employees table in uppr case.
SELECT UPPER(FirstName) FROM dbo.Employees

-------Restricting Sorting-------
--1. Write a query to display the names (first_name, last_name) and salary for
--all employees whose salary is not in the range $10,000 through $15,000.
SELECT FirstName + ' '+ LastName AS 'names',Salary FROM dbo.Employees WHERE Salary NOT BETWEEN 10000 AND 15000
--2. Write a query to display the names (first_name, last_name) and department ID of all
--employees in departments 30 or 100 in ascending alphabetical order by department ID.
SELECT CONCAT(FirstName, LastName) AS 'names',DepartmentID FROM dbo.Employees WHERE DepartmentID IN(30,100) ORDER BY DepartmentID ASC
--3. Write a query to display the names (first_name, last_name) and salary for all 
--employees whose salary is not in the range $10,000 through $15,000 and are in department 30 or 100.
SELECT CONCAT_WS(' ',FirstName,LastName) AS 'names',Salary FROM dbo.Employees
WHERE DepartmentID IN(20,100) AND Salary NOT BETWEEN 10000 AND 15000 
--4. Write a query to display the names (first_name, last_name) and hire date for all 
--employees who were hired in 1987.
SELECT CONCAT_WS(' ',FirstName,LastName),HireDate FROM dbo.Employees WHERE DATENAME(YEAR,HireDate) = '1987'
--5. Write a query to display the first_name of all employees who have both "b" and "c" in their first name.
SELECT FirstName FROM dbo.Employees WHERE FirstName LIKE '%b%' AND FirstName LIKE '%c%'
--6. Write a query to display the last name, job, and salary for all employees whose 
--job is that of a Programmer or a Shipping Clerk, and whose salary is not equal to $4,500, $10,000, or $15,000.
SELECT LastName,JobId,Salary FROM dbo.Employees WHERE JobId IN('IT_PROG','SH_CLERK')
AND Salary NOT IN(4500,10000,15000)
--7. Write a query to display the last names of employees whose names have exactly 6 characters.
SELECT LastName FROM dbo.Employees WHERE LEN(LastName) = 6
--8. Write a query to display the last names of employees having 'e' as the third character.
SELECT LastName FROM dbo.Employees WHERE LastName LIKE '__e%'
--9. Write a query to display the jobs/designations available in the employees table.
SELECT DISTINCT JobId FROM dbo.Employees
--10.  Write a query to display the names (first_name, last_name), salary and PF (15% of salary) of all employees.
SELECT CONCAT_WS(' ',FirstName,LastName),Salary,(Salary * 0.15) AS 'PF' FROM dbo.Employees
--11. Write a query to select all record from employees where last name in 'BLAKE', 'SCOTT', 'KING' and 'FORD'.
SELECT * FROM dbo.Employees WHERE LastName IN('BLAKE','SCOTT','KING','FORD') 

------AGGRIGATE AND GROUP BY--------

--1. Write a query to list the number of jobs available in the employees table.
SELECT DISTINCT JobId FROM dbo.Employees
--2. Write a query to get the total salaries payable to employees.
SELECT SUM(Salary) FROM dbo.Employees
--3. Write a query to get the minimum salary from employees table.
SELECT MIN(Salary) FROM dbo.Employees
--4. Write a query to get the maximum salary of an employee working as a Programmer.
 SELECT MAX(Salary) FROM dbo.Employees
--5. Write a query to get the average salary and number of employees working the department 90.
SELECT AVG(Salary),COUNT(EmployeeID) FROM dbo.Employees WHERE DepartmentID = 90
--6. Write a query to get the highest, lowest, sum, and average salary of all employees.
SELECT MAX(Salary),MIN(Salary),SUM(Salary),AVG(Salary) FROM dbo.Employees
--7. Write a query to get the number of employees with the same job.
SELECT COUNT(EmployeeID),JobId FROM dbo.Employees GROUP BY JobId
--8. Write a query to get the difference between the highest and lowest salaries.
SELECT DIFFERENCE(MAX(Salary),MIN(Salary)) FROM dbo.Employees
--9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.
SELECT ManagerID,Salary FROM dbo.Employees  WHERE Salary <= ALL(SELECT Salary FROM Employees)
--10. Write a query to get the department ID and the total salary payable in each department.
SELECT DepartmentID,SUM(Salary) FROM dbo.Employees GROUP BY DepartmentID
--11. Write a query to get the average salary for each job ID excluding programmer.
SELECT AVG(Salary) FROM dbo.Employees WHERE JobId <> 'IT_PROG' GROUP BY JobId
--12. Write a query to get the total salary, maximum, minimum, average salary of 
--employees (job ID wise), for department ID 90 only.
SELECT SUM(Salary),MAX(Salary),MIN(Salary),AVG(Salary) FROM dbo.Employees WHERE DepartmentID = 90 GROUP BY JobId
--13. Write a query to get the job ID and maximum salary of the employees where maximum
--salary is greater than or equal to $4000.
SELECT JobId,MAX(Salary) FROM dbo.Employees  GROUP BY JobID HAVING MAX(Salary) >= 4000
--14. Write a query to get the average salary for all departments employing more than 10 employees.
SELECT AVG(Salary)  FROM dbo.Employees GROUP BY DepartmentID HAVING COUNT(EmployeeID) > 10

-----SUbQueries------

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
SELECT a.FirstName,a.LastName,a.EmployeeID,(SELECT DepartmentName FROM Departments WHERE 
DepartmentID = a.DepartmentID)
FROM dbo.Employees a

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