// Variable to store the name of the customer, bob
var customerName = 'bob'
// Function to convert the customer name to uppercase
function upperCaseCustomerName() {
    // Converts the customerName to uppercase and updates the variable
    customerName = customerName.toUpperCase()
}
// Function to set the best customer
function setBestCustomer() {
    // Sets the bestCustomer variable to 'not bob'
    bestCustomer = 'not bob' 
}
// Function to overwrite the best customer
function overwriteBestCustomer() {
    // Changes the bestCustomer variable to 'maybe bob'
    bestCustomer = 'maybe bob'
}
// Constant variable to store the least favorite customer
const leastFavoriteCustomer = 'definitely bob'
// Function to change the least favorite customer
function changeLeastFavoriteCustomer() {
    // Unsuccessfully changes the leastFavoriteCustomer variable, which will cause an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = 'bob'
}