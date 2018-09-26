'use strict' // Te obliga a declarar las variables como en Java

var express = require('express'); // Declaramos una variable para importar la libreria express

var app = express(); // Llamamos al metodo express

var api = express.Router(); //Metodo de la libreria express que sirve para enrutamiento

var book =[
    {
        id: 1,
        name: 'Guerra y Paz',
        autor: 'León Tolstói',
        editorial: 'Ubuntu',
        price: 23
    },{
        id: 2,
        name: 'Orgullo y Prejuicio',
        autor: 'Jane Austen',
        editorial: 'Thomas Egerton',
        price: 35
    },{
        id: 3,
        name: 'El Conde de Montecristo',
        autor: 'Alejandro Dumas',
        editorial: 'Ubuntu',
        price: 50
    },{
        id: 4,
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
api.get("/one-book", onlyBook); // Hacemos una llamada a la funcion
api.get('/books', getBooks);
api.get('/book/:id', getBookId);

//Base Route
app.use("/api", api); // Raiz de nuestro sitio web

const port = 40000; // Declaramos el puerto por el cual va a escuchar nuestro servidor

app.listen(port, () => {
    console.log('listening on http:://localhost:' + port);// Esto es para que nuestra app
});            