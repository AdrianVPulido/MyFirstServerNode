'use strict' //This method forces you to declare the variables as in Java

var express = require('express'); // We declare a variable to import the express library

var app = express(); // We call the express method

var api = express.Router(); //Method of the express library that serves for routing

var book =[
    {
        id: 0,
        name: 'Guerra y Paz',
        autor: 'León Tolstói',
        editorial: 'Ubuntu',
        price: 23
    },{
        id: 1,
        name: 'Orgullo y Prejuicio',
        autor: 'Jane Austen',
        editorial: 'Thomas Egerton',
        price: 35
    },{
        id: 2,
        name: 'El Conde de Montecristo',
        autor: 'Alejandro Dumas',
        editorial: 'Ubuntu',
        price: 50
    },{
        id: 3,
        name: 'Los Miserables',
        autor: 'Victor Hugo',
        editorial: 'Ubuntu',
        price: 21
    }
]

const onlyBook = (req, res) => {
    res.status(200).send(book[0]);
    return;
}

const getBooks = (req, res) =>{
    res.status(200).send(book);
    return;
}

const getBookId = (req, res) =>{
    const idbook = req.params.id;
    for(var i=idbook;i<book.length;i++)
    res.status(200).send(book[i]);
    return;
}

// Route
api.get("/one-book", onlyBook); // We make a call to the function
api.get('/books', getBooks);
api.get('/book/:id', getBookId);

//Base Route
app.use("/api", api); // Root of our website

const port = 40000; // We declare the port through which our server will listen

app.listen(port, () => {
    console.log('listening on http:://localhost:' + port);
});            