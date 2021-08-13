--1 Write a query to rank employees based on their salary for a month
Select RANK() OVER(ORDER BY Salary DESC),Salary from dbo.Employees

--2 Select 4th Highest salary from employee table using ranking function
Select * FROM (Select DENSE_RANK() OVER(ORDER BY Salary DESC) Rank,Salary from dbo.Employees)tmp
WHERE Rank = 4

-- 3 Get department, total salary with respect to a department from employee table. 
SELECT DepartmentID, SUM(salary) FROM dbo.Employees GROUP BY DepartmentID;

--4 Get department, total salary with respect to a department from employee table order by total salary descending
SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys DESC;

--5 Get department wise maximum salary from employee table order by salary ascending
SELECT DepartmentID, MAX(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys ASC;

--6 Get department wise minimum salary from employee table order by salary ascending
SELECT DepartmentID, MIN(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys ASC;

--7  Select department, total salary with respect to a department from employee table where total salary 
--greater than 50000 order by TotalSalary descending
SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees
GROUP BY DepartmentID
HAVING SUM(salary) > 50000 
ORDER BY salarys DESC;