

// Promises

// 1. First we call the function on line 22. This then triggers the function to run. 
// The loanOut function is described on lines 10-19. 
// 2. The function decides if the promise is resolved (accepted) or rejected. 
// 3. If the amount is resolved, then the .then code will run. 
// 4. If the amount is rejected, then the .catch code will run. 
// Promises make it easy to control the flow of the code. You can use multiple .then statements for example. 

let creditLimit = 90;

const loanOut = (amount) => {
  return new Promise((resolve, reject) => {
    if (creditLimit < amount) {
      reject("Insufficient Funds!");
    } else {
      creditLimit - amount;
      resolve(amount)
    }
  });
}

console.log("Asking for $100, is that ok?...");

loanOut(100) // This triggers the code to run initially. 
  .then((amountReceived) => {
    console.log(`\-> I got ${amountReceived} from the bank. Remaining Credit Limit: $${creditLimit - amountReceived}`);
  })
  .catch((err) => {
    console.log(`\-> Error: ${err}!`);
  })









