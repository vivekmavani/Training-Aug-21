module.exports = class Mobike{

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
