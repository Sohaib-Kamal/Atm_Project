import inquirer from "inquirer";
import chalk from 'chalk';
import { thanks } from "./index.js";
let myBalance = 10000;
const myPin = 1234;
export let atmFunctions = async () => {
    //ask user about his pin number
    let pinAnswer = await inquirer.prompt([{
            name: "pin",
            message: "Please enter your Pin Number: ",
            type: "number"
        }]);
    //if pin is correct this code will run
    if (pinAnswer.pin === myPin) {
        console.log(chalk.greenBright("Correct Pin Code!"));
        //give user three option 
        let atmOptions = await inquirer.prompt([{
                name: "options",
                message: "Please select option: ",
                type: "list",
                choices: ["Cash Withdrawal", "Check Balance", "Fast Cash"]
            }]);
        //if user selct cash withdrawal    
        if (atmOptions.options === "Cash Withdrawal") {
            let amountAnswer = await inquirer.prompt([{
                    name: "amount",
                    message: "Enter Your amount: ",
                    type: "number"
                }]);
            //if user enter amount that is equal or less than the present balance
            if (amountAnswer.amount <= myBalance) {
                myBalance -= amountAnswer.amount;
                console.log(chalk.greenBright(`Your remaining balance is ${myBalance}.`));
                thanks();
            }
            //if use enter amount that is more than the balance
            else {
                console.log(chalk.redBright("Insufficient Balance."));
                thanks();
            }
        }
        //if user select check balance
        else if (atmOptions.options === "Check Balance") {
            console.log(chalk.greenBright(`Your balance is $${myBalance}`));
            thanks();
        }
        //if user select fast cash option
        else if (atmOptions.options === "Fast Cash") {
            let fastCashOptions = await inquirer.prompt([{
                    name: "fastOptions",
                    message: "Please select amount to withdraw: ",
                    type: "list",
                    choices: [100, 200, 500, 1000]
                }]);
            myBalance -= fastCashOptions.fastOptions;
            console.log(chalk.greenBright(`Your remaining balance is ${myBalance}.`));
            thanks();
        }
    }
    //if pin is incorrect
    else {
        console.log(chalk.bold.redBright("Incorrect Pin Code!!!"));
    }
};
