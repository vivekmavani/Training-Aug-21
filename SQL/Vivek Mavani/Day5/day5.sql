SELECT a.FirstName FROM dbo.Employees a JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID
SELECT * FROM dbo.Employees a LEFT JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID
SELECT a.FirstName FROM dbo.Employees a RIGHT JOIN dbo.Departments b ON a.DepartmentID = b.DepartmentID
SELECT a.FirstName FROM dbo.Employees a  JOIN dbo.Employees b ON a.EmployeeID = b.ManagerID
SELECT * FROM dbo.Employees a CROSS JOIN dbo.Departments b 

--Get difference between JOINING_DATE and INCENTIVE_DATE from employee and incentives table
SELECT DATEDIFF(year,e.JOINING_DATE,i.INCENTIVE_DATE) FROM employee e JOIN 
incentives i ON e.employeee_id = i.employeee_id

--Select first_name, incentive amount from employee and incentives table for those employees
--who have incentives and incentive amount greater than 3000
SELECT e.first_name,i.incentive_amount FROM employee e JOIN incentives i 
ON e.employeee_id = i.employeee_id WHERE i.incentives_amount > 3000 AND e.incentive_amount > 3000

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives.
SELECT e.first_name,i.incentive_amount FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id

--Select EmployeeName, ManagerName from the employee table.
SELECT e.EmployeeName,i.ManagerName FROM employee e  JOIN employee i ON e.employeee_id = i.manager_id

--Select first_name, incentive amount from employee and incentives table for all employees even if they didn’t get incentives and
--set incentive amount as 0 for those employees who didn’t get incentives.
SELECT e.first_name,i.incentive_amount FROM employee e RIGHT JOIN incentives i ON e.employeee_id = i.employeee_id
WHERE i.incentive_amount = 0


 /*  i. car (carid, vin, make, model, year, mileage, askprice, invoiceprice)
  ii. dealership (dealershipid, name, address, city, state)
 iii. salesperson (salespersonid, name)
  iv. customer (customerid, name, address, city, state)
   v. reportsto (reportstoid, salespersonid, managingsalespersonid)
  vi. worksat (worksatid, salespersonid, dealershipid, monthworked, basesalaryformonth)
 vii. inventory (inventoryid, vin, dealershipid)
viii. sale (saleid, vin, customerid, salespersonid, dealershipid, saleprice, saledate)
*/
create table car
(
carid int  not null CONSTRAINT car_id_cartable PRIMARY KEY IDENTITY(1,1),
vin int not null UNIQUE,
make varchar(20) not null,
model varchar(20) not null,
year DATE CONSTRAINT year_cartable CHECK(year LIKE '__/__/____'),
mileage decimal(10,2) not null,
askprice MONEY not null,
invoiceprice MONEY null,
)

create table dealership
(
dealershipid int  not null CONSTRAINT dealershipid_dealershiptable PRIMARY KEY IDENTITY(1,1),
name varchar(20) not null,
address varchar(100) not null,
city varchar(20) not null,
state varchar(20) not null
)

create table salesperson
(
salespersonid int  not null CONSTRAINT salespersonid_salespersontable PRIMARY KEY IDENTITY(1,1), 
name varchar(20) not null,
)
create table customer
(
customerid int  not null CONSTRAINT customerid_customertable PRIMARY KEY IDENTITY(1,1), 
name varchar(20) not null,
address varchar(100) not null,
city varchar(20) not null,
state varchar(20) not null
)

create table reportsto
(
reportstoid int  not null CONSTRAINT reportstoid_reportstotable PRIMARY KEY IDENTITY(1,1),
salespersonid  int DEFAULT null CONSTRAINT salespersonid_reportstotable FOREIGN KEY (salespersonid) REFERENCES salesperson(salespersonid) ON DELETE CASCADE ON UPDATE CASCADE,
managingsalespersonid int not null
)

create table worksat
(
worksatid int  not null CONSTRAINT worksatid_worksattotable PRIMARY KEY IDENTITY(1,1),
salespersonid  int  DEFAULT null CONSTRAINT salespersonid_worksattotable FOREIGN KEY (salespersonid) REFERENCES salesperson(salespersonid) ON DELETE CASCADE ON UPDATE CASCADE,
managingsalespersonid int not null,
dealershipid int  DEFAULT null CONSTRAINT dealershipid_worksattotable FOREIGN KEY (dealershipid) REFERENCES dealership(dealershipid) ON DELETE CASCADE ON UPDATE CASCADE,
monthworked DATE CONSTRAINT year_worksat CHECK(monthworked LIKE '__/__/____'),
basesalaryformonth MONEY not null
)

create table inventory
(
inventoryid int  not null CONSTRAINT inventoryid_inventorytotable PRIMARY KEY IDENTITY(1,1),
vin int  DEFAULT null CONSTRAINT vin_inventorytotable FOREIGN KEY (vin) REFERENCES car(vin) ON DELETE CASCADE ON UPDATE CASCADE,
dealershipid int  DEFAULT null CONSTRAINT dealershipid_inventorytotable FOREIGN KEY (dealershipid) REFERENCES dealership(dealershipid) ON DELETE CASCADE ON UPDATE CASCADE,
)

create table sale
(saleid int  not null CONSTRAINT saleid_saletable PRIMARY KEY IDENTITY(1,1),
vin int not null CONSTRAINT vin_saletable FOREIGN KEY (vin) REFERENCES car(vin) ON DELETE CASCADE ON UPDATE CASCADE,
customerid int  DEFAULT null CONSTRAINT customerid_saletable FOREIGN KEY (customerid) REFERENCES customer(customerid) ON DELETE CASCADE ON UPDATE CASCADE,
salespersonid int  DEFAULT null CONSTRAINT salespersonid_saletable FOREIGN KEY (salespersonid) REFERENCES salesperson(salespersonid) ON DELETE CASCADE ON UPDATE CASCADE,
dealershipid int DEFAULT null CONSTRAINT dealershipid_saletable FOREIGN KEY (dealershipid) REFERENCES dealership(dealershipid) ON DELETE CASCADE ON UPDATE CASCADE, 
saleprice MONEY not null, 
saledate  DATE CONSTRAINT year_sale CHECK(saledate LIKE '__/__/____'),
)

USE [day5cardatabase]
GO

INSERT INTO [dbo].[car]
           ([vin]
           ,[make]
           ,[model]
           ,[year]
           ,[mileage]
           ,[askprice]
           ,[invoiceprice])
     VALUES
           (1
           ,'Toyota'
           ,'Prius'
           ,'2021-08-19'
           ,1222.90
           ,200000
           ,100000),
           (2
           ,'Toyota'
           ,'Camry'
           ,'2021-08-19'
           ,2222.90
           ,300000
           ,400000),
		     (3
           ,'Toyota'
           ,'Prius2'
           ,'2021-08-19'
           ,1222.90
           ,200000
           ,100000),
           (4
           ,'Toyota'
           ,'Camry2'
           ,'2021-08-19'
           ,2222.90
           ,300000
           ,400000)
GO

USE [day5cardatabase]
GO

INSERT INTO [dbo].[dealership]
           ([name]
           ,[address]
           ,[city]
           ,[state])
     VALUES
           ('Honda Sales'
           ,'address 1'
           ,'bhavnagar'
           ,'Gujarat'),
		     ('Yamaha World'
           ,'address 2'
           ,'ahmdabad'
           ,'Gujarat'),
		     ('Concept Hyundai'
           ,'address 3'
           ,'gandhinagar'
           ,'Gujarat'),
		     ('Hero Honda Car World'
           ,'address 4'
           ,'bhavnagar'
           ,'Gujarat'),
		     ('Toyota Performance'
           ,'address 5'
           ,'bhavnagar'
           ,'Gujarat'),
		     ('Ferrari Sales'
           ,'address 6'
           ,'bhavnagar'
           ,'Gujarat')
GO


USE [day5cardatabase]
GO

INSERT INTO [dbo].[salesperson]
           ([name])
     VALUES
           ('Adam Smith'),
		   ('Narendra Modi'),
		   ('Amit Shah'),
		   ('Vijay Rupani'),
		   ('Sachin Tendulkar'),
		   ('Dhoni'),
		   ('Virat Kohali')
GO


 USE [day5cardatabase]
GO

INSERT INTO [dbo].[customer]
           ([name]
           ,[address]
           ,[city]
           ,[state])
     VALUES
           ('Dhoni'
           ,'address 1'
           ,'Ahmedabad'
           ,'Gujarat'),
		     ('Vivek'
           ,'address 2'
           ,'gandhinagar'
           ,'Gujarat'),
		     ('Salman'
           ,'address 3'
           ,'Ahmedabad'
           ,'Gujarat'),
		     ('Vijay'
           ,'address 4'
           ,'bhavnagar'
           ,'Gujarat'),
		     ('Ajay'
           ,'address 5'
           ,'Ahmedabad'
           ,'Gujarat')
GO


USE [day5cardatabase]
GO

INSERT INTO [dbo].[reportsto]
           ([salespersonid]
           ,[managingsalespersonid])
     VALUES
           (1
           ,2),
		   (2
           ,2),
		   (3
           ,2),
		   (4
           ,3)
GO


USE [day5cardatabase]
GO

INSERT INTO [dbo].[worksat]
           ([salespersonid]
           ,[managingsalespersonid]
           ,[dealershipid]
           ,[monthworked]
           ,[basesalaryformonth])
     VALUES
           (1
           ,2
           ,1
           ,'2010-01-01'
           ,2000),
		    (2
           ,2
           ,1
           ,'2010-01-01'
           ,2000),
		    (3
           ,1
           ,1
           ,'2010-01-01'
           ,2000),
		    (4
           ,3
           ,1
           ,'2012-01-01'
           ,2000),
		    (4
           ,4
           ,1
           ,'2011-01-01'
           ,2000)
GO


USE [day5cardatabase]
GO

INSERT INTO [dbo].[inventory]
           ([vin]
           ,[dealershipid])
     VALUES
           (1
           ,2),
		    (2
           ,2),
		    (3
           ,2),
		    (3
           ,2),
		    (4
           ,4),
		   (1
           ,4),
		    (4
           ,2),
		    (1
           ,2),
		    (3
           ,3),
		    (4
           ,1)
GO


USE [day5cardatabase]
GO

INSERT INTO [dbo].[sale]
           ([vin]
           ,[customerid]
           ,[salespersonid]
           ,[dealershipid]
           ,[saleprice]
           ,[saledate])
     VALUES
           (1
           ,2
           ,2
           ,2
           ,2000
           ,'01/01/2011'),
		   (2
           ,3
           ,1
           ,2
           ,2000
           ,'2021-01-01'),
		   (4
           ,1
           ,2
           ,4
           ,2000
           ,'2021-01-01'),
		   (1
           ,1
           ,4
           ,1
           ,2000
           ,'2021-01-01')
GO





--1. Find the names of all salespeople who have ever worked for the company at any dealership.
SELECT a.name FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid

--2. List the Name, Street Address, and City of each customer who lives in Ahmedabad.
SELECT name,address,city FROM customer WHERE city = 'Ahmedabad'

--3. List the VIN, make, model, year, and mileage of all cars in the inventory of the dealership named "Hero Honda Car World".
SELECT a.vin,a.make,a.model,a.year,a.mileage FROM car a JOIN inventory b 
ON a.vin = b.vin JOIN dealership c  ON b.dealershipid = c.dealershipid WHERE c.name= 'Hero Honda Car World' 

--4. List names of all customers who have ever bought cars from the dealership named "Concept Hyundai".
SELECT a.name FROM customer a JOIN sale b  ON a.customerid = b.customerid 
JOIN dealership c ON b.dealershipid = c.dealershipid WHERE c.name= 'Concept Hyundai' 

--5. For each car in the inventory of any dealership, list the VIN, make, model, and year of the car, along with the name, 
--city, and state of the dealership whose inventory contains the car.
SELECT a.vin,a.make,a.model,a.year,c.name,c.city, c.state FROM car a JOIN inventory b ON a.vin = b.vin
JOIN dealership c ON  b.dealershipid = c.dealershipid 

--6. Find the names of all salespeople who are managed by a salesperson named "Adam Smith".
SELECT a.name FROM salesperson a JOIN reportsto b ON a.salespersonid = b.salespersonid
WHERE (SELECT salespersonid FROM salesperson WHERE name = 'Adam Smith') = b.managingsalespersonid 

--7. Find the names of all salespeople who do not have a manager.
SELECT name FROM salesperson WHERE salespersonid NOT IN (SELECT managingsalespersonid FROM reportsto)

--8. Find the total number of dealerships.
SELECT COUNT(dealershipid) FROM dealership

--9. List the VIN, year, and mileage of all "Toyota Camrys" in the inventory of the dealership named "Toyota Performance". 
--(Note that a "Toyota Camry" is indicated by the make being "Toyota" and the model being "Camry".)
SELECT a.vin,a.year,a.mileage FROM car a JOIN inventory b  ON a.vin = b.vin JOIN dealership c  ON b.dealershipid = c.dealershipid
WHERE c.name= 'Toyota Performance' AND a.make = 'Toyota' AND a.model = 'Camry'

--10. Find the name of all customers who bought a car at a dealership located in a state other than the state in which they live.
SELECT a.name FROM customer a JOIN sale b  ON a.customerid = b.customerid JOIN dealership c  ON b.dealershipid = c.dealershipid
WHERE a.city <> c.city

--11. Find the name of the salesperson that made the largest base salary working at the dealership named "Ferrari Sales" during January 2010.
Select name From salesperson WHERE salespersonid IN(SELECT TOP(1) salespersonid FROM
worksat WHERE DATENAME(MONTH,monthworked) + ' '+DATENAME(YEAR,monthworked) = 'January 2010'  ORDER BY basesalaryformonth DESC) 

--12. List the name, street address, city, and state of any customer 
--who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT a.name,a.address,a.city,a.state,b.saledate FROM customer a JOIN sale b ON a.customerid = b.customerid 
WHERE b.customerid > 2 AND FORMAT(b.saledate,'MMMM dd, yyyy')  = 'January 1, 2010'

--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car.
--The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT a.name,a.salespersonid,SUM(b.saleprice) FROM salesperson a JOIN sale b  
ON a.salespersonid = b.salespersonid GROUP BY a.name,a.salespersonid 
SELECT * FROM sale
 
--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
--For the purpose of this query,assume that no two people have the same name.
SELECT a.name FROM customer a JOIN sale b ON a.customerid = b.customerid JOIN
sale c ON b.customerid = c.salespersonid WHERE DATENAME(YYYY,c.saledate) = '2010' 

--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
--located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT a.name, a.salespersonid FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid JOIN dealership c 
ON b.dealershipid = c.dealershipid WHERE c.state = 'Gujarat' AND saledate BETWEEN '2021-03-01' AND '2021-03-31'

--16. Calculate the payroll for the month of March 2010.
--	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
--   * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
--along with the total commission for the salesperson that month.
--  * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
--  * The profit made on a car is the difference between the sale price and the invoice price of the car. 
--(Assume, that cars are never sold for less than the invoice price.)

SELECT name,d.salespersonid,Totalsalary + d.basesalaryformonth FROM(SELECT a.name,a.salespersonid, SUM((c.invoiceprice-b.saleprice)*0.05) 'Totalsalary'
FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid JOIN car c ON b.vin = c.vin 
WHERE  FORMAT(b.saledate,'MMMM yyyy') = 'March 2010' GROUP BY a.salespersonid,a.name  )tmp  JOIN worksat d ON d.salespersonid = tmp.salespersonid
WHERE FORMAT(d.monthworked,'MMMM yyyy') = 'March 2010' 