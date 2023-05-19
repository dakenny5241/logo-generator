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
            text.length <= 3 || "The text cannot be more than 3 chars",
    },
index.js 
    {
        
    }
    name: "textColor",
    type: "input",
    message:
        "Give text color for logo, not exceeding 3 chars",
    validate: (text) =>
        text.length <= 3 || "The text cannot be more than 3 chars",
    },
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
        newLogo.setText(text,textColor);
        newLogo.setShape(logo,logoColor);
        return writeFile("logo.svg", newLogo.render());
    })
    .then(() => {
        console.log  ("Generated logo.svg");
    })
    .catch((err) => {
        console.log(err);
    });