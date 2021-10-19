// Rambo Rental Bikes is looking for developing a system to calculate the rentals of the bikes. 
// System should accept the customer details, bike details and calculate the rental charges. 
// DESCRIPTION OF PROJECTS System allows users to add customer details with bike rented. 
// It computes rent for each customer. Systems displays the Bike details with summation of
//  days of hire and rental payment. FUNCTIONALITY AND TASK Define a class called Mobike with
//   the following description: Instance variables/data members: BikeNumber – to store the 
//   bike’s number PhoneNumber – to store the phone number of the customer Name – to store 
//   the name of the customer Days – to store the number of days the bike is taken on rent o 
//   charge – to calculate and store the rental charge Member methods: void Compute( ) – to
//    compute the rental charge Bike No. PhoneNo No. of days Charge The rent for a mobike is
//     charged on the following basis: First five days Rs 500 per day Next five days Rs 400 per day R

class Mobike{
    constructor(BikeNumber,PhoneNumber,Name,Days,Charge)
    {
        this.BikeNumber = BikeNumber;
        this.PhoneNumber = PhoneNumber;
        this.Name = Name;
        this.Days = Days;
        this.Charge = Charge;
    }
    get Compute(){
        let rent = 1;
        if(this.Days <=5)
        {
         rent = 500 * this.Days;
        }else if(this.Days <=10 && this.Days > 5)
        {
            rent = (500 * 5) + (400 * (this.Days-5));
        }else if(this.Days > 10)
        {
            rent = (500 * 5) + (400 * 5) + (200 * (this.Days-10));
        }
        this.Charge = rent;
        let getrent = {
            BikeNumber : this.BikeNumber,
            PhoneNumber : this.PhoneNumber,
            Name:  this.Name,
            Days :  this.Days ,
            Charge : this.Charge,
        }
     return getrent;
     
    }
}
var lists  = [
   new Mobike('GJ 11 2080', 1234567890,'vivek1',3,0),
   new Mobike('GJ 02 2610', 1234567890,'vivek2',4,0),
   new Mobike('GJ 03 1010', 1234567890,'vivek3',5,0),
   new Mobike('GJ 04 1', 1234567890,'vivek4',6,0),
   new  Mobike('GJ 05 5454', 1234567890,'vivek5',7,0),
]; 

for(var i = 0;i<lists.length;i++)
{
    var getrent = lists[i].Compute;
    console.log("---------------------------");
    console.log("BikeNumber: " + getrent.BikeNumber);
    console.log("PhoneNumber: " +getrent.PhoneNumber);
    console.log("Name: " +getrent.Name);
    console.log("Days: " +getrent.Days);
    console.log("Charge: " +getrent.Charge);
    console.log("---------------------------");
}