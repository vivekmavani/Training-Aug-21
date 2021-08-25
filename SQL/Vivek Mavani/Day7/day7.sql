with  friendss(Uid)
  AS
  (SELECT Uid FROM  Users WHERE  Uid  IN 
(Select DISTINCT FriendRequest_Uid FROM  FriendRequest WHERE FriendRequest_Frid = 1 AND FriendStatus = 1)
OR  Uid  IN (Select DISTINCT FriendRequest_Frid FROM 
FriendRequest WHERE FriendRequest_Uid  = 1 AND FriendStatus = 1))
,
friendoffriend(Uid) AS 
(SELECT Uid FROM  Users WHERE  Uid  IN 
(Select DISTINCT FriendRequest_Uid FROM  FriendRequest WHERE FriendRequest_Frid IN (SELECT Uid FROM friendss)
AND FriendStatus = 1 AND FriendRequest_Uid <> 1)
OR  Uid  IN (Select DISTINCT FriendRequest_Frid FROM 
FriendRequest WHERE FriendRequest_Uid  IN (SELECT Uid FROM friendss)
AND FriendStatus = 1 AND FriendRequest_Frid <> 1))

SELECT a.Pid,a.Title,a.Description,c.Image,a.Likes,b.Category_Name,a.Post_Date,a.Post_Uid
FROM Post a JOIN Categories b
ON a.Post_Category_ID = b.Category_ID JOIN Image c ON c.Imageid = a.Pid
WHERE
a.Pid IN(SELECT Pid FROM Likebyuser WHERE LikebyUser_Uid IN (SELECT Uid FROM friendoffriend))


WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)  
AS  
(  
    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
)  

SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear  
FROM Sales_CTE  
GROUP BY SalesYear, SalesPersonID  
ORDER BY SalesPersonID, SalesYear;  
WITH Sales_CTE (SalesPersonID, NumberOfOrders)  
AS  
(  
    SELECT SalesPersonID, COUNT(*)  
    FROM Sales.SalesOrderHeader  
    WHERE SalesPersonID IS NOT NULL  
    GROUP BY SalesPersonID  
)  
SELECT AVG(NumberOfOrders) AS "Average Sales Per Person"  
FROM Sales_CTE;  




--Derived Table
--1 Write a query to rank employees based on their salary for a month
 SELECT * FROM(Select RANK() OVER(ORDER BY Salary DESC) 'Rank',Salary from dbo.Employees) tmp

--2 Select 4th Highest salary from employee table using ranking function
Select * FROM (Select DENSE_RANK() OVER(ORDER BY Salary DESC) Rank,Salary from dbo.Employees)tmp
WHERE Rank = 4

-- 3 Get department, total salary with respect to a department from employee table. 
Select * FROM (SELECT DepartmentID, SUM(salary) FROM dbo.Employees)tmp;

--4 Get department, total salary with respect to a department from employee table order by total salary descending
Select * FROM (SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys DESC)tmp;

--5 Get department wise maximum salary from employee table order by salary ascending
Select * FROM (SELECT DepartmentID, MAX(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys ASC)tmp;

--6 Get department wise minimum salary from employee table order by salary ascending
Select * FROM (SELECT DepartmentID, MIN(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID ORDER BY salarys ASC)tmp;

--7  Select department, total salary with respect to a department from employee table where total salary 
--greater than 50000 order by TotalSalary descending
Select * FROM (SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees
GROUP BY DepartmentID
HAVING SUM(salary) > 50000 
ORDER BY salarys DESC)tmp;

--CTE 
--1 Write a query to rank employees based on their salary for a month
WITH vivekcte(Rank,Salary)
AS
 (Select RANK() OVER(ORDER BY Salary DESC) 'Rank',Salary from dbo.Employees)

 SELECT * FROM vivekcte

--2 Select 4th Highest salary from employee table using ranking function
WITH vivekcte(Rank,Salary)
AS
 (Select * FROM (Select DENSE_RANK() OVER(ORDER BY Salary DESC) Rank,Salary from dbo.Employees)
 SELECT * FROM vivekcte WHERE Rank = 4

-- 3 Get department, total salary with respect to a department from employee table. 
WITH vivekcte(DepartmentID,Salary)
AS
 (SELECT DepartmentID, SUM(salary) 'Salary' FROM dbo.Employees GROUP BY DepartmentID)
 SELECT * FROM vivekcte

--4 Get department, total salary with respect to a department from employee table order by total salary descending
WITH vivekcte(DepartmentID,salarys)
AS
 (SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID)
 SELECT * FROM vivekcte ORDER BY salarys DESC

--5 Get department wise maximum salary from employee table order by salary ascending
WITH vivekcte(Rank,salarys)
AS
 (SELECT DepartmentID, MAX(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID)
 SELECT * FROM vivekcte ORDER BY salarys ASC

--6 Get department wise minimum salary from employee table order by salary ascending
WITH vivekcte(Rank,salarys)
AS
 (SELECT DepartmentID, MIN(salary) 'salarys' FROM dbo.Employees GROUP BY DepartmentID)
  SELECT * FROM vivekcte ORDER BY salarys ASC

--7  Select department, total salary with respect to a department from employee table where total salary 
--greater than 50000 order by TotalSalary descending
WITH vivekcte(Rank,salarys)
AS
 (SELECT DepartmentID, SUM(salary) 'salarys' FROM dbo.Employees
GROUP BY DepartmentID
)
  SELECT * FROM vivekcte WHERE salarys > 50000 ORDER BY salarys DESC

--Derived Table
  --Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT * FROM(SELECT DATEDIFF(year,e.JOINING_DATE,i.INCENTIVE_DATE) FROM employee e JOIN 
incentives i ON e.employeee_id = i.employeee_id)tmp

--Select first_name, incentive amount from employee and incentives table for those employees
--who have incentives and incentive amount greater than 3000
SELECT first_name,incentive_amount FROM(SELECT e.first_name 'first_name',i.incentive_amount 'incentive_amount' FROM employee e JOIN incentives i 
ON e.employeee_id = i.employeee_id WHERE e.incentive_amount > 3000)tmp WHERE incentives_amount > 3000 

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT * FROM(SELECT e.first_name,i.incentive_amount FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id)tmp

--Select EmployeeName, ManagerName from the employee table.
SELECT * FROM(SELECT e.EmployeeName,i.ManagerName FROM employee e  JOIN employee i ON e.employeee_id = i.manager_id)tmp

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and
--set incentive amount as 0 for those employees who didn’t get incentives.
SELECT first_name,incentive_amount FROM(SELECT e.first_name 'first_name',i.incentive_amount 'incentive_amount' FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id
)tmp WHERE incentive_amount = 0


--CTE
  --Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
WITH vivekcte(datediff)
AS
 (SELECT DATEDIFF(year,e.JOINING_DATE,i.INCENTIVE_DATE) 'datediff' FROM employee e JOIN 
incentives i ON e.employeee_id = i.employeee_id)
SELECT * FROM vivekcte

--Select first_name, incentive amount from employee and incentives table for those employees
--who have incentives and incentive amount greater than 3000
WITH vivekcte(first_name,incentive_amount,incentives_amount)
AS
 (SELECT e.first_name 'first_name',i.incentive_amount 'incentive_amount',e.incentives_amount 'incentives_amount' FROM employee e JOIN incentives i 
ON e.employeee_id = i.employeee_id )
SELECT first_name,incentive_amount FROM vivekcte WHERE incentives_amount > 3000 AND incentive_amount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
WITH vivekcte(first_name,incentive_amount)
AS
 (SELECT e.first_name 'first_name',i.incentive_amount 'incentive_amount' FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id)
SELECT * FROM vivekcte
--Select EmployeeName, ManagerName from the employee table.
WITH vivekcte(first_name,incentive_amount)
AS
 (SELECT e.EmployeeName,i.ManagerName FROM employee e  JOIN employee i ON e.employeee_id = i.manager_id)
SELECT * FROM vivekcte
--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and
--set incentive amount as 0 for those employees who didn’t get incentives.
WITH vivekcte(first_name,incentive_amount)
AS
 (SELECT e.first_name,i.incentive_amount FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id)
SELECT * FROM vivekcte WHERE incentive_amount = 0