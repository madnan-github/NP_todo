#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];

let cond = true;

while(cond){
let addTask = await inquirer.prompt([
    {
        name: "todo",
        message: "What you want to add in your todos",
        type: "input"
    },
    {
        name: "addMore",
        message: "Dp you want to add more!",
        type: "confirm"
    }
])
todos.push(addTask.todo);
console.log(todos);

cond = addTask.addMore;
}