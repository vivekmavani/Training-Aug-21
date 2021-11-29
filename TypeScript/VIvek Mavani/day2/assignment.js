//There is a retail shop which need to manage the inventory, 
//whenever some purchase is being made product quantity should be reduced,
// if quanity is less than 5 reorder request should be raised.
//Design an interface and classes for the same.
var Shop = /** @class */ (function () {
    function Shop(id, name, price, quant) {
        this.previous = 0;
        this.id = id;
        this.name = name;
        this.price = price;
        this.quanity = quant;
        this.previous = quant;
    }
    Shop.prototype.checkquantity = function () {
        this.quanity = this.quanity + this.previous;
        console.log("Current Quantity:  ".concat(this.quanity));
    };
    Shop.prototype.getorder = function (q) {
        if (q > this.quanity) {
            console.log("You cannot order than ".concat(this.quanity, " items"));
        }
        else {
            this.quanity = this.quanity - q;
            console.log("Order for ".concat(this.name, "has placed successfully"));
            if (this.quanity < 5) {
                this.checkquantity();
            }
        }
    };
    return Shop;
}());
var Shop1 = new Shop(1, "inventory1", 100, 10);
var Shop2 = new Shop(2, "inventory2", 50, 15);
var Shop3 = new Shop(3, "inventory3", 70, 20);
Shop1.getorder(1);
Shop2.getorder(2);
Shop3.getorder(3);
