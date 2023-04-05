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
];

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