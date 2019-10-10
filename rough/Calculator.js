function Calculator() {
    
this.num1 = 10;
this.num2 = 20;

this.sumNoparameters = function() {
    console.log(this.num1 + this.num2);
}

this.sum = function(a,b) {
    console.log(a+b);
}

this.sub = function (a,b) {
    return a-b;
}

}

var num = "10";
console.log("string lenght --> " + num.length);

module.exports = Calculator;