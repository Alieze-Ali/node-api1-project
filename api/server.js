// BUILD YOUR SERVER HERE
const express = require('express');

const User = require('./users/model');

const server = express();

// Global Middleware
server.use(express.json());



// ENDPOINTS

// POST: /api/users 
server.post('/api/users', (req, res)=>{
    const user = req.body;
    console.log(user);
})

// GET: /api/users 
server.get('/api/users', (req, res)=>{
    console.log(users);
})

// GET ID: /api/users/:id
server.get('/api/users/:id', (req, res)=>{
    User.findById(req.params.id)
    .then()
    .catch()
})

// DELETE: /api/users/:id
server.delete('/api/users/:id', (req, res)=>{

})

// PUT: /api/users/:id
server.put('/api/users/:id', (req, res)=>{

})

// SERVER EXPORT
module.exports = server; // EXPORT YOUR SERVER instead of {}