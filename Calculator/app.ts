import a from './controller.js'
import {c, b as f} from './module.js'
import inquirer from "inquirer"
import chalk from 'chalk'

// let message = "Test abc"
// message = "Test3";
// console.log(a);
// console.log(c, f)
// console.log(a+f+c)

let answers = await inquirer.prompt([{
    name: "age",
    type: "number",
    message: "Enter your age"
}])

console.log(chalk.blue("Inshallah in " + (60 - answers.age) + "  in upcoming years"));