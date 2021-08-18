-- remove space from left side LTRIM
SELECT ASCII('A'),LOWER('SQL'),UPPER('sql'),LTRIM('   vivek'),REVERSE('ekviv')
-- sound same spelling differnt 
SELECT SOUNDEX('red'),SOUNDEX('read')
--reapeting 
SELECT REPLICATE('*',7)
SELECT REPLACE('C# Language','C#','Java')
SELECT STUFF('C# Language',1,2,'Java')

SELECT * FROM string_split('C#,Java,Php',',')
-- serch pettrn
SELECT PATINDEX('%Language%','C# Language')
--from 1
SELECT CHARINDEX('p','Parrot')
SELECT CHARINDEX('r','Parrot')
SELECT CHARINDEX('s','MicrosoftSQL Server',11)
SELECT CONCAT('vivek',' ','mavani')

SELECT CHARINDEX ('s','MicrosoftSQL Server',CHARINDEX('s','MicrosoftSQL Server')+1)

USE AdventureWorksLT2017
SELECT DATEADD(day,5,DAYADD(mm,5,hiredate)) from table
SELECT ISDATE('2021-12-8')
SELECT DATEDIFF(MM,HIREDATE,GETDATE()) FROM table
USE daytwo
SELECT FORMAT(HireDate,'yyyy/mm/dd') from dbo.Employees

SELECT 

SELECT GETDATE(),GETUTCDATE(),SYSDATETIME(),SYSDATETIMEOFFSET(),TODATETIMEOFFSET(GETDATE(),'-0.7:00')

--Write a query that displays the FirstName and the length of the FirstName for 
--all employees whose name starts with the letters ‘A’, ‘J’ or ‘M’. 
--Give each column an appropriate label. Sort the results by the employees’ FirstName
USE daytwo
SELECT FirstName As 'Employee Name', LEN(FirstName) AS 'Lenght' FROM dbo.Employees   WHERE FirstName LIKE 'A%' OR
FirstName LIKE  'J%' OR FirstName LIKE 'M%' ORDER BY FirstName ASC

--Write a query to display the FirstName and Salary for all employees. Format the salary to be 10 characters long,
--left-padded with the $ symbol. Label the column SALARY.
Select CONCAT(REPLICATE('$',10 - LEN(Salary)), CAST(Salary AS varchar)) AS SALARY from dbo.Employees 

--Write a query to display the employees with their code, first name, last name and hire date
--who hired either on seventh day of any month or seventh month in any year.
SELECT EmployeeID, FirstName, LastName, HireDate FROM dbo.Employees WHERE 
DATEPART(dd,HireDate) LIKE 07 OR DATEPART(mm,HireDate) LIKE 07

--Write a query to display the length of first name for employees
--where last name contains character ‘c’ after 2nd position.
SELECT LEN(FirstName) AS 'Length' FROM dbo.Employees WHERE CHARINDEX('c',LastName) = 2

--Write a query to update the portion of the PhoneNumber in the employees table,
--within the phone number the substring ‘124’ will be replaced by ‘999’.
UPDATE dbo.Employees SET  PhoneNumber = REPLACE(CAST(PhoneNumber AS varchar),'124','999')
SELECT PhoneNumber FROM dbo.Employees

--Write a query to calculate the age in year.
SELECT CAST(FORMAT(GETDATE(),'dd/mm/yy') AS date)
SELECT  DATEPART(year,GETDATE()) -  DATEPART(yyyy,27/10/1999) - 100

--Write a query to get the distinct Mondays from HireDate in employees tables.
SELECT HireDate,  DATENAME(WEEKDAY,HireDate)  FROM dbo.Employees WHERE DATENAME(WEEKDAY,HireDate) = 'Monday'

--Write a query to get the FirstName and HireDate from Employees table where HireDate
--between ‘1987-06-01’ and ‘1987-07-30’
SELECT FirstName,HireDate FROM dbo.Employees WHERE HireDate BETWEEN '1987-06-01' AND '1987-07-30'

--Write a query to display the current date in the following format. Sample output : 12:00 AM Sep 5, 2014
SELECT FORMAT(GETDATE(),'hh:mm tt ')
SELECT FORMAT(CAST(GETDATE() AS datetime2), N'hh:mm tt MMMM d, yyyy')

--Write a query to get the FirstName, LastName who joined in the month of June.
SELECT FirstName,LastName FROM dbo.Employees WHERE DATENAME(mm,HireDate) = 'June'

--Write a query to get first name, hire date and experience of the employees.
SELECT FirstName,HireDate, DATEPART(year,GETDATE()) -  DATEPART(yyyy,HireDate)  AS 'experience' FROM dbo.Employees 
SELECT FirstName,HireDate, DATEDIFF(year,HireDate,GETDATE())  AS 'experience' FROM dbo.Employees 

--Write a query to get first name of employees who joined in 1987.
SELECT FirstName FROM dbo.Employees WHERE DATENAME(YYYY,HireDate) = '1987'
