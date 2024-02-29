//Checklist
//Deposit some money
//Determine number of line to bet on
//Collect a bet amount
//Spin the slop machine
//check if the user won
//give the money(win or lose)
//play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again")
    }
    else {
        return numberDepositAmount;
    }
}
};

const depositAmount = deposit();
console.log(depositAmount);

// End in 17:49
