/* Your code goes here */
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "paul";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'john';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'bar'
  //let favoriteCustomer = 'not bar'
}