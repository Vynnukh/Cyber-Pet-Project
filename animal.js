class Animal {
    constructor(name, thirst, hunger) {
        this.name = name;
        this.thirst = 0;
        this.hunger = 0;
    }
    drinks(){
        return console.table({
        name: this.name,
        thirst: this.thirst -= 5,
        hunger: this.hunger += 5
        })
        //! console.log(`${this.name} has had a drink`)
        // return this;
    }
    eats(){
        //! console.log(`${this.name} has eaten`)
        return console.table({
        name: this.name,
        thirst: this.thirst += 10,
        hunger: this.hunger -= 5
        })
        // return this;
    }
    stats(){
        return console.table({
            name: this.name,
            thirst: this.thirst,
            hunger: this.hunger
        })
    }
    // quit() {
    //     console.log("Are you sure you want to quit?")
    // }
}

module.exports = {Animal}