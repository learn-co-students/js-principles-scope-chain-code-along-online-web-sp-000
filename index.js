/* Your code goes here */
var customerName = 'bob'
const leastFavoriteCustomer = 'Samir'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'Tom';
}


function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(newFavorite){
  bestCustomer = newFavorite;
}

function congratulateCustomer(){
  return `congrats ${favoriteCustomer}`;
}

function attemptTwoFavoriteCustomers(){
    let favoriteCustomer = 'bar';
    let favoriteCustomer = 'not bar'; 
}