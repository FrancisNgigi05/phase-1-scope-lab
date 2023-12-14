// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const LeastFavoriteCustomer = "could be bob";
function upperCaseCustomerName () {
    customerName = customerName.toUpperCase();
    console.log (customerName);
}
function setBestCustomer () {
    return bestCustomer = "not bob";
}

function overwriteBestCustomer () {
    return bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer () {
    return LeastFavoriteCustomer = "maybe bob"
}
