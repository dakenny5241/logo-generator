class Logo{
    constructor(){
        this.text = "";
        this.shape = "";
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shape}${this.text}
        </svg>`
    }
    setTxt(text,textColor){
        this.text = `<text x="150" y="125" text-anchor="middle" fill="${textColor}" font-size="65">${text}</text>`;  
    }
    setShape(shapeInput){
        this.shape = shapeInput.render()
    }
}

module.exports = Logo;