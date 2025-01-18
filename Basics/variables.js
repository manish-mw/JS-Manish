const accountId = 12345;
let accountName = "Manish washimakar";
var accountEmail = "manish@123";
accountCity = "Nagpur";
let accountState;

// accountId = 54321 //not allowed
accountName = "Man";
accountEmail= "man@123";
accountCity = "Pune";

/*
not use var anymore
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountName, accountState, accountCity])

