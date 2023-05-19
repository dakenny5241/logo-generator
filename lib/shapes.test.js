const {Circle, Triangle, Square} = require("./shapes");

describe("Circle", () => {
    test("should render svg for a red circle element", () => {
        const expectedSvg = '<circle cx="150" cy="150" r="150" fill="red" />';
        const circle = new Circle();
        circle.setColor("red");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
      });
    
    test ("render", () => {
        const circle = new Circle();
        circle.setColor("red");
        const expected = `<circle cx="150" cy="150" r="150" fill="${circle.color}" />`;
       
        const actual = circle.render();
        expect(actual).toBe(expected);
    });


    test("constructor", () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });
    test ("render", () => {
        const square = new Square();
        square.setColor("red");
        const expected = `<polygon points="150 18 244 182 56 182" fill="red" />`;
        const actual = square.render();
        expect(actual).toBe(expected);
    });

    test("constructor", () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    });
    test ("render", () => {
        const triangle = new Triangle();
        const expected = `<polygon points="150 18 244 182 56 182" fill="red" />`;
        triangle.setColor("red");
        const actual = triangle.render();
        expect(actual).toBe(expected);
    });
})