/* Your code goes here */
var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = "a";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "b";
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = "a";
  const favoriteCustomer = "b";
}
