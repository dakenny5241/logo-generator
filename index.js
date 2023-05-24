const inquirer = require('inquirer');
const Logo = require("./lib/logo");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

let questions = [
    {
        name: "text",
        type: "input",
        message:
            "Give text for logo, not exceeding 3 chars",
        validate: (text) =>
            text.length <= 3 || "The text cannot be more than 3 chars",
    },
    {
        name: "textColor",
        type: "input",
        message: "Give text color",       
    },
    {
        name: "logo",
        type: "list",
        message: "Give logo",
        choices: ["triangle", "square", "circle"],  
    },
    {
        name: "logoColor",
        type: "input",
        message: "Give logo color",
    }]
inquirer.prompt(questions)
    .then(({ text, textColor, logo, logoColor }) => {
        let shape;
        switch (logo) {
            case "triangle":
                shape = new Triangle();
                break;

            case "square":
                shape = new Square();
                break;

            case "circle":
                shape = new Circle();
                break;
        }
        shape.setColor(logoColor);

        const newLogo = new Logo();
        newLogo.setTxt(text,textColor);
        newLogo.setShape(shape);
        return writeFile("logo.svg", newLogo.render());
    })
    .then(() => {
        console.log  ("Generated logo.svg");
    })
    .catch((err) => {
        console.log(err);
    })