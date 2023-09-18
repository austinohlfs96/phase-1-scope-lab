// Write your solution in this file!
var customerName = 'bob';

var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
}

function setBestCustomer()  {
 bestCustomer = `not ${customerName.toLowerCase()}`;
}

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName.toLowerCase()}`
}

const leastFavoriteCustomer = 'tom'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob"
}