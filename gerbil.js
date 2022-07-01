
const { Animal } = require("./animal.js");

class gerbil extends Animal {
    constructor(name,  thirst, hunger, emotion) {
        super(name, thirst, hunger)
        this.emotion = emotion
    }

    manicRunAround() {
        this.hunger += 10;
        this.thirst += 10;
        console.log(`${this.name} is manicly running around`)
        return this
    }

    toiletRoll() {
        this.hunger += 10;
        this.thirst += 10;
        console.log(`${this.name} ran through the toilet roll a few times and then decided to chew on it.`)
        return this
    }
}

module.exports = {gerbil}