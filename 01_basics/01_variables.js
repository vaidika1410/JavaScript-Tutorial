const accountId = 4223
let accountEmail = "vaidika@gmail.com"
var accountPassword = '12345'
accountCity = "Indore"

// accountId = 2 // we cannot change the values of constant variable 

accountEmail = "abc@gmail.com"
accountPassword = "12345678"
accountCity = "Mumbai"

console.table([accountEmail, accountId, accountPassword, accountCity])

console.log(accountId);

/*
prefer not to use var 
as it causes issues in block and functional scope
*/