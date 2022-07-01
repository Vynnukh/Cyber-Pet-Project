
const { Animal } = require("./animal.js");

class cat extends Animal {
    constructor(name,  thirst, hunger, content, boredom) {
        super (name, thirst, hunger);  //*  Adds to parent class (Animal)
        this.content = content;
        this.boredom = boredom;   //*  New subclass for Cat
    }
    //* Cat Specific (sub method)
    playWithString() {
        this.thirst += 20;
        this.hunger += 10;
        this.happy += 0;
        console.log(`${this.name}, plays with string, they are ${this.content} but soon get bored`)
        return this;
    }
    scratchPost() {
        this.happy += 30
        this.thirst += 10;
        console.log(`${this.name}, scratches thier scratching post , they are ${this.content}`)
        return this;
    }
}

module.exports = {cat}
