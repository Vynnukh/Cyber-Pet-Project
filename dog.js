
const { Animal } = require("./animal.js");

class dog extends Animal {
    constructor(name,  thirst, hunger, happy) {
        super (name, thirst, hunger);  //*  Adds to parent class (Animal)
        this.happy = 0;   //*  New subclass for Dog
    }
    //* Dog Specific (sub method)
    playFetch() {
        return console.table({
        name: this.name,
        thirst: this.thirst += 20,
        hunger: this.hunger += 10,
        happy: this.happy += 50
        })
        //! console.log(`${this.name}, this knackers them out but makes them ${this.happy}`)
        // return this;
    }
    chaseTail() {
        return console.table({
            name: this.name,
        happy: this.happy += 30,
        thirst: this.thirst += 10
        })
        //! console.log(`${this.name} chases thier tail, they are ${this.happy}`)
        // return this;
    }
}

module.exports = {dog}
