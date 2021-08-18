create table BRANCH  
(
Bname VARCHAR(18) not null PRIMARY KEY,
CITY VARCHAR(18)  not null
)
create table CUSTOMER   
(
Cname VARCHAR(18) not null PRIMARY KEY,
CITY VARCHAR(18)  not null
)
create table Deposit 
(
ACTNO VARCHAR(5) not null PRIMARY KEY,
Cname VARCHAR(18) DEFAULT null CONSTRAINT Cname_Deposittable FOREIGN KEY (Cname) REFERENCES CUSTOMER(Cname) ,
Bname VARCHAR(18) DEFAULT null CONSTRAINT Bname_Deposittable FOREIGN KEY (Bname) REFERENCES BRANCH(Bname) ,
Amount int not null,
Adate DATE CONSTRAINT Adate_Deposittable CHECK(Adate LIKE '__/__/____')
)
create table BORROW    
(
LOANNO VARCHAR(5) not null PRIMARY KEY,
Cname VARCHAR(18) DEFAULT null CONSTRAINT Cname_BORROWtable FOREIGN KEY (Cname) REFERENCES CUSTOMER(Cname) ,
Bname VARCHAR(18) DEFAULT null CONSTRAINT Bname_BORROWtable FOREIGN KEY (Bname) REFERENCES BRANCH(Bname) ,
Amount int not null
)

--Q1: List Names of Customers who are Depositors and have Same Branch City as that of SUNIL
SELECT a.CNAME FROM Depositss a JOIN BRANCH b ON a.Bname = b.Bname WHERE b.CITY IN (SELECT c.CITY FROM 
Depositss b  JOIN BRANCH c on b.Bname = c.Bname WHERE  b.CNAME = 'SUNIL' );
--Q2: List All the Depositors Having Depositors Having Deposit in All the Branches
-- where SUNIL is Having Account
SELECT d.Cname FROM Depositss d JOIN BRANCH b ON d.Bname = b.Bname WHERE d.Bname IN
(SELECT d.Bname FROM Depositss d JOIN BRANCH b ON d.Bname = b.Bname WHERE d.Cname = 'SUNIL')


--Q3: List the Names of Customers Living in the City where the Maximum Number of Depositors are Located
SELECT a.CNAME FROM CUSTOMER a WHERE a.CITY IN (SELECT TOP(1) b.CITY FROM 
Depositss c JOIN CUSTOMER b ON b.CNAME = c.CNAME GROUP BY b.CITY ORDER BY COUNT(b.CITY) DESC)

--Q4: List Names of Borrowers Having Deposit Amount Greater than 1000 and Loan Amount Greater than 2000
SELECT a.CNAME, a.AMOUNT, b.CNAME, b.AMOUNT FROM BORROW 
a JOIN Depositss b ON  b.CNAME = a.CNAME AND a.AMOUNT > 1000 AND b.AMOUNT > 2000;

--Q5: List All the Customers Living in NAGPUR and Having the Branch City as MUMBAI or DELHI
SELECT a.Cname FROM CUSTOMER a JOIN Depositss b ON a.Cname = b.Cname JOIN BRANCH c ON b.Bname = c.Bname
WHERE a.CITY = 'NAGPUR' AND c.CITY IN ('MUMBAI','DELHI')

--Q6: Count the Number of Customers Living in the City where Branch is Located 
SELECT COUNT(a.Cname) FROM CUSTOMER a JOIN BRANCH b ON a.CITY = b.CITY 
