import inquirer from "inquirer";
import chalk from "chalk";
let firstInput = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "Enter first number"
    }]);
let secondInput = await inquirer.prompt([{
        name: "secondNumber",
        type: "number",
        message: "Enter second number"
    }]);
let operations = await inquirer.prompt([{
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Enter operation to be performed"
    }]);
console.log(chalk.red(firstInput.firstNumber));
console.log(chalk.yellowBright(secondInput.secondNumber));
console.log(chalk.blue(operations.operation));
if (operations.operation === "Addition") {
    let add = firstInput.firstNumber + secondInput.secondNumber;
    console.log(add);
}
else if (operations.operation === "Subtraction") {
    let subtract = secondInput.secondNumber - firstInput.firstNumber;
    console.log(subtract);
}
else if (operations.operation === "Multiplication") {
    let mult = firstInput.firstNumber * secondInput.secondNumber;
    console.log(mult);
}
else if (operations.operation === "Division") {
    let divide = secondInput.secondNumber / firstInput.firstNumber;
    console.log(divide);
}
