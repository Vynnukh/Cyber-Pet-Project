// const { playWithString, scratchPost } = require("./cat.js");
// const { playFetch, chaseTail } = require("./dog.js");
// const { restOnHotPlate, hideInCave } = require("./gecko.js");
// const { manicRunAround, toiletRoll  } = require("./gerbil.js");

const inquirer = require("inquirer"); 
const { async } = require("rxjs");
const {cat} = require("./cat.js")
const {dog} = require("./dog.js")
const {gecko} = require("./gecko")
const {gerbil} = require("./gerbil")
let myPet = {}
let myPetType =""

const start = async () => {
    const typeOfPet = await inquirer.prompt({
        type: "list",
        name: "typeOfPet",
        message: "Please select your animal type!",
        choices: [
            {
                key: "a",
                name: "Cat",
                value: "cat",
            },
            {
                key: "b",
                name: "Dog",
                value: "dog",
            },
            {
                key: "c",
                name: "Gecko",
                value: "gecko",
            },
            {
                key: "d",
                name: "Gerbil",
                value: "gerbil"
            }
        ],
    });

    const petName = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your pet called?',
    });
    
    switch(typeOfPet.typeOfPet){
        case 'cat':
            myPet = new cat(petName);
            myPetType = "cat";
            await catFn();
            break;
        case 'dog': 
            myPet = new dog(petName);
            myPetType = "dog";
            await dogFn();
            break;
        case 'gecko':
            myPet = new gecko(petName);
            myPetType = "gecko";
            await geckoFn();
            break;
        case 'gerbil':
            myPet = new gerbil(petName);
            myPetType = "gerbil";
            await gerbilFn();
            break;
        default:
            break;

}

// console.table(myPet)

}

// ^ This is the start function that begins the game

const catFn = async () => {
    const catActivity = await inquirer.prompt({
        type: "list",
        name: "activity",
        message: "Please select an activity for your cat.",
        choices: [
            {
               key: "a",
                name: "Show Status",
                value: "stats"
            },
            {
                key: "b",
                name: "Feed",
                value: "eats"
            },
            {
                key: "c",
                name: "Give Water",
                value: "drinks"
            },
            {
                key: "d",
                name: "Give String",
                value: "playWithString"
            },
            {
                key: "e",
                name: "Show scratch post",
                value: "scratchPost"
            },
            {
                key: "f",
                name: "Quit",
                value: "quit"
            }
        ]
            });
            if (catActivity.activity == "stats") {
                myPet.stats()
                await catFn()
            } 
            
            else if (catActivity.activity == "eats") {
                myPet.eats()
                await catFn()
            } 
            
            else if (catActivity.activity == "drinks") {
                myPet.drinks()
                await catFn()
            } 
            
            else if (catActivity.activity == "playWithString") {
                myPet.playWithString()
                await catFn()
            } 
            
            else if (catActivity.activity == "scratchPost") {
                myPet.scratchPost()
                await catFn()
            } 
            
            else if (catActivity.activity == "quit"){
                await quitFn()
            }
}


const dogFn = async () => {
    const dogActivity = await inquirer.prompt({
        type: "list",
        name: "activity",
        message: "Please select an activity for your dog.",
        choices: [
            {
                key: "a",
                name: "Show Status",
                value: "stats"
            },
        {
                key: "b",
                name: "Feed",
                value: "eats"
        },
            {
                key: "c",
                name: "Drink",
                value: "drinks"
            },
            {
               key: "d",
                name: "Play Fetch",
                value: "playFetch"
            },
            {
                key: "e",
                name: "Chase Tail",
                value: "chaseTail"
            },
            {
                key: "f",
                name: "Quit",
                value: "quit"
            }
        ]
    })

     if(dogActivity.activity == "stats") {
            myPet.stats()
            await dogFn()
     }  
     
     else if (dogActivity.activity == "eats") {
        myPet.eats()
        await dogFn()
     }

     else if (dogActivity.activity == "drinks") {
        myPet.drinks()
        await dogFn()
     }

     else if (dogActivity.activity == "playFetch") {
        myPet.playFetch()
        await dogFn()
     }

     else if (dogActivity.activity == "chaseTail") {
        myPet.chaseTail()
        await dogFn()
     }

     else if (dogActivity.activity == "quit") {
        await quitFn()
     }
            
}
        
            

const geckoFn = async () => {
    const geckoActivity = await inquirer.prompt({
        type: "list",
        name: "activity",
        message: "Please select an activity for your gecko.",
        choices: [
            {
                key: "a",
                name: "Show Status",
                value: "stats"
            },
            {
                key: "b",
                name: "Feed",
                value: "eats"
            },
            {
                key: "c",
                name: "Drink",
                value: "drinks"
            },
            {
                key: "d",
                name: "Watch",
                value: "restOnHotPlate"
            },
            {
                key: "e",                
                name: "Ignore",
                value: "hideInCave"
            },
            {
                key: "f",
                name: "Quit",
                value: "quit"
            }
        ]
    })

    if (geckoActivity.activity == "stats") {
        myPet.stats()
        await geckoFn()
    }

    else if (geckoActivity.activity == "eats") {
        myPet.eats()
        await geckoFn()
    }

    else if (geckoActivity.activity == "drinks") {
        myPet.drinks()
        await geckoFn()
    }

    else if (geckoActivity.activity == "restOnHotPlate") {
        myPet.restOnHotPlate()
        await geckoFn()
    }

    else if (geckoActivity.activity == "hideInCave") {
        myPet.hideInCave()
        await geckoFn()
    }

    else if (geckoActivity.activity == "quit") {
        await quitFn()
    }}

const gerbilFn = async () => {
    const gerbilActivity = await inquirer.prompt({
        type: "list",
        name: "activity",
        message: "Please select an activity for your gerbil.",
        choices: [
            {
                key: "a",
                name: "Show Status",
                value: "stats"
            },
            {
                key: "b",
                name: "Feed",
                value: "eats"
            },
            {
                key: "c",
                name: "Drink",
                value: "drinks"
            },
            {
                key: "d",
                name: "Leave alone",
                value: "manicRunAround"
            },
            {
                key: "e",
                name: "Show Cardboard Tube",
                value: "toiletRoll"
            },
            {
                key: "f",
                name: "Quit",
                value: "quit"
            }
        ]
    })

    if (gerbilActivity.activity == "stats") {
        myPet.stats()
        await gerbilFn()
    }

    else if (gerbilActivity.activity == "eats") {
        myPet.eats()
        await gerbilFn()
    }

    else if (gerbilActivity.activity == "drinks") {
        myPet.drinks()
        await gerbilFn()
    }

    else if (gerbilActivity.activity == "manicRunAround") {
        myPet.manicRunAround()
        await gerbilFn()
    }

    else if (gerbilActivity.activity == "toiletRoll") {
        myPet.toiletRoll()
        await gerbilFn()
    }
    else if (gerbilActivity.activity == "quit") {
        await quitFn()
    }
}


const quitFn = async () => {


    const quitActivity = await inquirer.prompt({
        type: "list",
        name: "activity",
        message: "?",
        choices: [
            {
                key: "y",
                name: "Yes",
                value: "yes",   
            },
            {
                key: "n",
                name: "No",
                value: "no",
            }
        ]
    })
    if (quitActivity.activity == "yes") {
        console.log("Are you sure, you will need to start again from scratch")
        const sureActivity = await inquirer.prompt({
            type: "list",
            name: "activity",
            message: "?",
            choices: [
                {
                    key: "y",
                    name: "Yes",
                    value: "yes",
                },
                {
                    key: "n",
                    name: "No",
                    value: "no",
                }
            ]
        })
        if (sureActivity.activity == "yes") {
            console.log("Thank you for playing")
        } else async ()=> {
            console.log("Typechoice")
            await typeChoice()
        }
        } else async ()=> {
            console.log("Typechoice")
            await typeChoice()
    }
}

const typeChoice = ()=> {
    if (myPetType == "cat") async () => {
        console.log(myPetType)
        await catFn()
    }
    else if (myPetType == "dog") async () => {
        console.log(myPetType)
        await dogFn()
    }
    else if (myPetType == "gecko") async () => {
        console.log(myPetType)
        await geckoFn()
    }
    else async () => {
        console.log(myPetType)
        await gerbilFn()
    }
}



start()