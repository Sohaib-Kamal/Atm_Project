#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import { atmFunctions } from "./atmfunctions.js";
function openScreen() {
    for (let i = 0; i < 200; i++) {
        for (let i = 0; i < 10; i++) {
            console.log(" ".repeat(Math.floor(Math.random() * 100)), chalk.greenBright(Math.floor(Math.random() * 10)));
        }
    }
    console.clear();
}
export function thanks() { console.log(" ".repeat(30), chalk.bgBlue.bold.yellowBright('Thank you for using Sohaib Kamal Bank LTD.')); }
openScreen();
console.log(" ".repeat(30), chalk.bgBlue.bold.yellowBright('Welcome to Sohaib Kamal Bank LTD.'));
async function wantAnotherTransaction(fun) {
    let condition = true;
    do {
        await fun();
        let wantrepeat = await inquirer.prompt({ name: "ask", type: "confirm", message: "Do you want to perform another transaction?" });
        condition = wantrepeat.ask;
    } while (condition);
    thanks();
}
wantAnotherTransaction(atmFunctions);
