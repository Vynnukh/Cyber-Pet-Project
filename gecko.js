
const { Animal } = require("./animal.js");

class gecko extends Animal {
    constructor(name,  thirst, hunger, emotion) {
        super(name, thirst, hunger)
        this.emotion = emotion
    }
restOnHotPlate() {
    return console.table({
    name: this.name,
    hunger: this.hunger += 10,
    thirst: this.thirst += 10
    })
    //! console.log(`${this.name} is now warming up.`)
    // return this
}

hideInCave() {
    return console.table({
    name: this.name,
    hunger: this.hunger += 10,
    thirst: this.thirst += 10
    })
    //! console.log(`${this.name} is now hiding in his cave`)
    // return this
}

}

module.exports = {gecko}