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
monthworked DATE CONSTRAINT year_cartable CHECK(monthworked LIKE '--/--/----'),
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
saledate  DATE CONSTRAINT year_cartable CHECK(saledate LIKE '--/--/----'),
)


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
SELECT a.name FROM salesperson a RIGHT JOIN reportsto b ON a.salespersonid <> b.managingsalespersonid 

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
SELECT a.name,MAX(b.basesalaryformonth) FROM salesperson a JOIN worksat b ON a.salespersonid = b.salespersonid 
JOIN dealership c ON b.dealershipid = c.dealershipid WHERE C.name = 'Ferrari Sale' AND DATENAME(MONTH,b.monthworked) + ' '+DATENAME(YEAR,b.monthworked) = 'January 2010' 

--12. List the name, street address, city, and state of any customer who has bought more than two cars from all dealerships combined since January 1, 2010.
SELECT a.name,a.address,a.city,a.state FROM customer a JOIN sale b ON a.customerid = b.customerid WHERE b.customerid > 2 AND FORMAT(b.saledate,'MMMM dd, yyyy')  = 'January 1, 2010'


--13. List the name, salesperson ID, and total sales amount for each salesperson who has ever sold at least one car.
--The total sales amount for a salesperson is the sum of the sale prices of all cars ever sold by that salesperson.
SELECT a.name,a.salespersonid,SUM(b.saleprice) FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid GROUP BY b.salespersonid

--14. Find the names of all customers who bought cars during 2010 who were also salespeople during 2010.
--For the purpose of this query,assume that no two people have the same name.
SELECT a.name FROM customer a JOIN sale b ON a.customerid = b.customerid JOIN  sale c ON b.customerid = c.salespersonid WHERE DATENAME(YYYY,c.saledate) = '2010' 

--15. Find the name and salesperson ID of the salesperson who sold the most cars for the company at dealerships 
--located in Gujarat between March 1, 2010 and March 31, 2010.
SELECT a.name, a.salespersonid FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid JOIN dealership c 
ON b.dealershipid = c.dealershipid WHERE c.state = 'Gujarat' AND saledate BETWEEN '01/03/2021' AND '31/03/2021'

--16. Calculate the payroll for the month of March 2010.
--	* The payroll consists of the name, salesperson ID, and gross pay for each salesperson who worked that month.
--   * The gross pay is calculated as the base salary at each dealership employing the salesperson that month, 
--along with the total commission for the salesperson that month.
--  * The total commission for a salesperson in a month is calculated as 5% of the profit made on all cars sold by the salesperson that month.
--  * The profit made on a car is the difference between the sale price and the invoice price of the car. 
--(Assume, that cars are never sold for less than the invoice price.)

SELECT a.name,a.salespersonid, SUM(b.saleprice-c.invoiceprice*0.05) + d.basesalaryformonth 'Total salary' FROM salesperson a JOIN sale b ON a.salespersonid = b.salespersonid JOIN car c ON b.vin = c.vin 
JOIN worksat d ON d.salespersonid = b.salespersonid
WHERE  FORMAT(b.saledate,'MMMM yyyy') = 'March 2010' AND  FORMAT(d.monthworked,'MMMM yyyy') = 'March 2010' GROUP BY b.salespersonid  