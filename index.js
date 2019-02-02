/* Your code goes here */

var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overWriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "flow";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "joe";
}

let favoriteCustomer;

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "boss";
  let favoriteCustomer = "maria";
}
