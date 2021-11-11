const std =
{
    ID: {type : Number},
    Name: {type : String},
    Address: {type : String},
    Fees: {
        Amount: {type : Number},
        PaymentDate: {type : String},
        Status: {type : Boolean}
    },
    Result: {
        Hindi: {type : Number},
        Eng: {type : Number, min : 0,max: 100},
        Math: {type : Number, min : 0,max: 100},
        Total: {type : Number, min : 0},
        Grade: {type : String}
    }
}

module.exports = std;