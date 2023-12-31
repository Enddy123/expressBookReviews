const genl = require("./router/general.js")



let books = {
    1: {"author": "Chinua Achebe","title": "Things Fall Apart", "reviews": {} },
    2: {"author": "Hans Christian Andersen","title": "Fairy tales", "reviews": {} },
    3: {"author": "Dante Alighieri","title": "The Divine Comedy", "reviews": {} },
    4: {"author": "Unknown","title": "The Epic Of Gilgamesh", "reviews": {} },
    5: {"author": "Unknown","title": "The Book Of Job", "reviews": {} },
    6: {"author": "Unknown","title": "One Thousand and One Nights", "reviews": {} },
    7: {"author": "Unknown","title": "Nj\u00e1l's Saga", "reviews": {} },
    8: {"author": "Jane Austen","title": "Pride and Prejudice", "reviews": {} },
    9: {"author": "Honor\u00e9 de Balzac","title": "Le P\u00e8re Goriot", "reviews": {} },
    10: {"author": "Samuel Beckett","title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}



//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(Object.entries(books).forEach(books => {
        if((books[1]["title"]) == "The Book Of Job"){
           
            resolve((JSON.stringify(books,0,4)))
        }
           
        }))
    },6000)})

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

