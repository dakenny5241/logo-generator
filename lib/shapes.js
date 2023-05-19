class Shape {
    constructor () {
        this.color = "";
    }
    setColor (color) {
        this.color  = color;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150 18 244 182 56 182" fill="${this.color}" />`;
    }

    getArea() {
        
        return 0;
    }

    getPerimeter() {
        
    }

    getDiagonal() {
        
    }

    getHeight() {
        
    }

    getWidth() {
        
    }

    getColor() {
        
    }

    getText() {
        
    }
}

class Square extends Shape {
    
    render() {
        return `<polygon points="150 18 244 182 56 182" fill="${this.color}" />`;
    }

    getArea() {
        
        return 0;
    }

    getPerimeter() {
        


        return 0;
    }

    getDiagonal() {
        
        return 0;
    }

    getHeight() {
        
        return 0;
    }


    getWidth() {
        
        return 0;
    }

    getColor() {
        
        return 0;
    }

    getText() {
        
        return 0;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="150" fill="${this.color}" />`;
    }

    getArea() {
        
    }

    getPerimeter() {
       

        return 0;
    }

    getDiagonal() {
        
        return 0;
    }

    getHeight() {
        
        return 0;
    }

    getWidth() {
        
        return 0;
    }

    getColor() {
        
        return 0;
    }

    getText() {
        
        return 0;
    }  
};

module.exports = { Circle, Triangle, Square };