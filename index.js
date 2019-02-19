var customerName = 'bob'
const leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()

  //notice that there is no return statement
  //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob'
}




function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
}




function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = "Noelle"
  let favoriteCustomer = "Alex"

}
