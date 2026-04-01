const accountID = 123456789;
var accountName = "John Doe";
let accountBalance = "1000.50";
let accountType;

//accountID = 888888888; // This will cause an error because accountID is a constant and cannot be reassigned.
accountName = "Jane Smith";
accountBalance = "500000";
console.log(accountID);

console.table([accountID, accountName, accountBalance, accountType]);
/*
prefer not to use var, because of issue with function scope and block scope. 
Instead, use let for variables that may change and
const for variables that should not be reassigned. 
In this example, accountID is a constant because it should not change, 
while accountName and accountBalance are declared with let because they can be updated.
*/