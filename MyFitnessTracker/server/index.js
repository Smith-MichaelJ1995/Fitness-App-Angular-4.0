const express = require("express");
const handler = require("./httpHandler")
const gameController = require("./gameController");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const server = express();

const users = [];
const exercises = [];
//{ firstName: 'Mike', lastName: 'Smith',username: 'admin', password: 'password'}

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());

server.post('/auth/addexercise', (req, res) => {
    console.log(req.body)
    exercises.push(req.body);
    sendResponse(res, true, 'Success');
})

server.get('/auth/exercises', (req, res) => {
    res.json(exercises);
})
// GET: /
server.get("/", (req, res) => res.send("Welcome to the 'MyFitnessTracker' application!"))

server.get("/auth/loggedinusers", (req, res) => {
     let players = users.filter(byLoggedIn);

     //console.log(res.json(players));
     res.json(players);

     function byLoggedIn(element) {
         return element.loggedIn;
     }
})

server.post("/auth/register", (req, res) => {

    let user = req.body;

    let userFound = findUserByUsername(user);

    if (userFound) return sendResponse(res,false,"Invalid Operation, this username has already been taken.");

    //the user hasn't been added yet, add it to users list.
    users.push(user);
    
    console.log('NEW USER REGISTERED:');
    for(let entry of users)
    {
        console.log(entry);
    }

    //if code reaches this point, the new user has been added.
    sendResponse(res,true,"Success, the new user has been added!");
})

function findUserByUsername(user) {
    return users.find(byEmail);

    function byEmail(element) {
        return user.username === element.username;
    }
}

// POST: /auth/login
server.post("/auth/login", (req, res) => {
    let user = req.body;

    let foundUser = findUserByUsername(user);

    if (!foundUser) return sendResponse(res, false, 'Invalid username');

    if (foundUser.password !== user.password) return sendResponse(res, false, 'Invalid password');

    foundUser.loggedIn = true;

    let {firstName, lastName} = foundUser;
    let name = firstName + ' ' + lastName;

    let token = jwt.sign({name}, '123');

    //garbage code
    console.log('THERE ARE', users.length, '... USERS :', foundUser.firstName, ' is now logged in!');

    sendResponse(res, true, 'User successfully verified', name, token);
})

function sendResponse(res, success, message, name, token) {
    res.json({success, message, name, token});
}

server.listen(3001);

console.log("http://localhost:3001");