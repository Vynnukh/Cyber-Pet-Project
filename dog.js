
const { Animal } = require("./animal.js");

class dog extends Animal {
    constructor(name,  thirst, hunger, happy) {
        super (name, thirst, hunger);  //*  Adds to parent class (Animal)
        this.happy = happy;   //*  New subclass for Dog
    }
    //* Dog Specific (sub method)
    playFetch() {
        this.thirst += 20;
        this.hunger += 10;
        this.happy += 50;
        console.log(`${this.name}, this knackers them out but makes them ${this.happy}`)
        return this;
    }
    chaseTail() {
        this.happy += 30
        this.thirst += 10;
        console.log(`${this.name} chases thier tail, they are ${this.happy}`)
        return this;
    }
}

module.exports = {dog}
