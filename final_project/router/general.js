const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


const doesExist = (username)=>{
    let userswithsamename = users.filter((user)=>{
      return user.username === username
    });
    if(userswithsamename.length > 0){
      return true;
    } else {
      return false;
    }
  }


public_users.post("/register", (req,res) => {
  //Write your code here
  
    const username = req.body.username;
    const password = req.body.password;
  
    if (username && password) {
      if (!doesExist(username)) { 
        users.push({"username":username,"password":password});
        return res.status(200).json({message: "User successfully registered. Now you can login"});
      } else {
        return res.status(404).json({message: "User already exists!"});    
      }
    } 
    return res.status(404).json({message: "Unable to register user."});
  });


// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,0,4));
});


myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
              resolve((JSON.stringify(books,0,4)))
    }
    )      
    },6000)

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
})

// Get book details based on ISBN

public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  return res.send(books[isbn]);
  
  myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(Object.entries(books).forEach(books => {
        if((books[0]) == isbn){
           
            resolve((JSON.stringify(books,0,4)))
        }
           
        }))
    },6000)})
});


//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)

  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author;
   
  Object.entries(books).forEach(books => {
      if((books[1]["author"]) == author){
         
             res.send(books);
      }
         
      })
    

    // console.log(books)
   

myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(Object.entries(books).forEach(books => {
        if((books[1]["author"]) == author){
           
            resolve((JSON.stringify(books,0,4)))
        }
           
        }))
    },6000)})
});

myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
})

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
   
  Object.entries(books).forEach(books => {
      if((books[1]["title"]) == title){
         
             res.send(books);
      }
         
      })
    
   });


myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
    resolve(Object.entries(books).forEach(books => {
        if((books[1]["title"]) == title){
           
            resolve((JSON.stringify(books,0,4)))
        }
           
        }))
    },6000)})


//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })
 

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
   
    res.send(books[isbn]["reviews"]);
      
})
});



module.exports.general = public_users;
