import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: "userage",
        type: "number",
        message: "Enter your age",
    },
    {
        name: "userheight",
        type: "number",
        message: "Enter your height in meters"
    },
    {
        name: "userweight",
        type: "number",
        message: "Enter your weight in Kg"
    },
]);
let result = input.userweight / (input.userheight ** 2);
console.log(result);
if (result <= 18.5) {
    console.log("You are Underweight");
}
else if (result >= 18.5 && result <= 24.9) {
    console.log("Your BMI is Normal");
}
else if (result >= 25 && result <= 29.9) {
    console.log("You are overweight");
}
else if (result >= 30) {
    console.log("You are obese");
}
