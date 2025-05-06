// Write your solution in this file!
// Declare a global variable customerName using var
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set a new global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // declared globally without var/let/const
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'Karen';

// Function that tries to change the constant
function changeLeastFavoriteCustomer() {
  // This will throw a TypeError because we're trying to reassign a constant
  leastFavoriteCustomer = 'New Customer';
}
