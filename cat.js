const { Animal } = require("./animal.js");

class cat extends Animal {
    constructor(name,  thirst, hunger, content, boredom) {
        super (name, thirst, hunger);  //*  Adds to parent class (Animal)
        this.content = 0;
        this.boredom = 100;   //*  New subclass for Cat
    }
    //* Cat Specific (sub method)
    playWithString() {
        return console.table({
        name: this.name,
        hunger: this.hunger += 20,
        thirst: this.thirst += 10,
        boredom: this.boredom -= 10,
        content: this.content += 20,
        })
        //! console.log(`${this.name}, plays with string, they are ${this.content} but soon get bored`)
        // return this;
    }
    scratchPost() {
        return console.table({
        name: this.name,
        hunger: this.hunger += 10,
        thirst: this.thirst += 30,
        boredom: this.boredom -= 10,
        content: this.content += 20,
        })
        //! console.log(`${this.name}, scratches thier scratching post , they are ${this.content}`)
        // return this;
    }
}

module.exports = {cat}
