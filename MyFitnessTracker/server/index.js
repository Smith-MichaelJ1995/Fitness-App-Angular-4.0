const express = require("express");
const handler = require("./httpHandler")
const gameController = require("./gameController");
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const server = express();

const users = [{username: 'admin', password: 'password', firstName: 'A', lastName: 'B'}];

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());
// server.use("/client", express.static("./jquery-mockup"))
// server.use("/old", handler.main);
// server.use("/game", gameController.router );

// GET: /
server.get("/", (req, res) => res.send("Welcome to the 'MyFitnessTracker' application!"))

server.get("/auth/loggedinusers", (req, res) => {
    let users = users.filter(byLoggedIn);

    res.json(users);

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

    sendResponse(res, true, 'User successfully verified', name, token);
})

function sendResponse(res, success, message, name, token) {
    res.json({success, message, name, token});
}

server.listen(3001);

console.log("http://localhost:3001");