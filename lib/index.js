const inquirer = require('inquirer');
const logo = require("./lib/logo");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

let questions = [
    {
        name: "text",
        type: "input",
        message: 
        "Give text for logo, not exceeding 3 chars",
        validate: (text) =>
        text.length<=3 || "The text cannot be more than 3 chars",
    },
    {
        name: "textColor",
        type: "input",
        message: "Provide  text color"
    },
    {
        name: "shape",
        type: "list",
        message: "choose a shape for logo",
        choices: ["triangle", "square", "circle"],
    },
    {
        name: "logoColor",
        type: "input",
        message: "Provide a logo color"
    },
]