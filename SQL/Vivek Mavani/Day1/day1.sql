
CREATE database vivek

USE vivek;
# 1
CREATE table countries
(
CountryId int CONSTRAINT countid PRIMARY KEY,
CountryName varchar(50) not null CONSTRAINT cname CHECK(CountryName IN('Italy','India','China')),
RegionId decimal(10,0)
)
# 2
CREATE table JobHistory 
(
EmployeeId int CONSTRAINT eid PRIMARY KEY,
StartDate date not null,
End_Date date CONSTRAINT enddate CHECK(End_Date LIKE '--/--/----'),
Job_Id  decimal(2) not null,
Department_Id  int not null,
)
# 3
CREATE table jobs  
(
JobId  int CONSTRAINT jid PRIMARY KEY ,
JobTitle varchar(20) not null DEFAULT ' ', 
MinSalary  int CONSTRAINT minsalay DEFAULT 8000, 
MaxSalary  int null
)
# 4
CREATE TABLE employees
(
Employee_Id int  not null CONSTRAINT esid PRIMARY KEY,
FirstName varchar(20) not null,
LastName varchar(20) not null,
Email varchar(30) not null,
PhoneNumber varchar(9),
Hire_Date date,
Job_Id int  not null CONSTRAINT jsid FOREIGN KEY (Job_Id) REFERENCES jobs(JobId),
Salary varchar(10),
Commission int not null,
Manager_Id int not null,
Department_Id decimal(18, 0) not null CONSTRAINT fkey_did FOREIGN KEY  REFERENCES  Departments(DepartmentId)
)

USE [vivek]
GO

INSERT INTO [dbo].[employees]
           ([Employee_Id]
           ,[FirstName]
           ,[LastName]
           ,[Email]
           ,[PhoneNumber]
           ,[Hire_Date]
           ,[Job_Id]
           ,[Salary]
           ,[Commission]
           ,[Manager_Id]
           ,[Department_Id])
     VALUES
           (1
           ,'vivek'
           ,'mavani'
           ,'vivekcmavani@gmail.com'
           ,12345678
           ,'2005-04-12'
           ,1
           ,2000
           ,200
           ,2
           ,1)
GO


# assingment
CREATE TABLE employees
(
Employee_Id int  not null CONSTRAINT Employee_Id PRIMARY KEY,
FirstName varchar(20) not null,
LastName varchar(20) not null,
Email varchar(30) not null,
PhoneNumber varchar(9),
Hire_Date date,
Salary varchar(10),
Manager_Id int not null
)


CREATE TABLE commission
(
commission_id int  not null CONSTRAINT esid PRIMARY KEY,
e_id int not null CONSTRAINT e_commission_id FOREIGN KEY (e_id) REFERENCES employees(Employee_Id),
commission decimal(10,2) not null
)

CREATE TABLE car
(
car_id int  not null CONSTRAINT car_id PRIMARY KEY,
e_id int not null CONSTRAINT e_id FOREIGN KEY (e_id) REFERENCES employees(Employee_Id),
car_name varchar(20) not null,
car_number varchar(10) not null,
)

CREATE TABLE completesales
(
cs_id int  not null CONSTRAINT c_completesales_id PRIMARY KEY,
e_id int not null,
car_id int not null CONSTRAINT car_completesales_id FOREIGN KEY (car_id) REFERENCES car(car_id)
)
