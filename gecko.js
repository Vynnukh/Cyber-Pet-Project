
const { Animal } = require("./animal.js");

class gecko extends Animal {
    constructor(name,  thirst, hunger, emotion) {
        super(name, thirst, hunger)
        this.emotion = emotion
    }
restOnHotPlate() {
    this.hunger += 10
    console.log(`${this.name} is now warming up.`)
}

hideInCave() {
    this.hunger += 10
    this.thirst += 10
    console.log(`${this.name} is now hiding in his cave`)
}

}

module.exports = {gecko}