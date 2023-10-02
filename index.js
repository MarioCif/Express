const express = require('express');

const app = express();

app.get('/', (req, res)  => {
    res.send("gsadasda");
})

app.get('/login', (req,res) => {
    res.send("Bienvenido");
})

app.get('/aviones', (req, res) => {
    res.send("Lista de aviones")
});

app.get('/autos', (req, res) => {
    res.send("Lista de autos")
});

app.get('/motos', (req, res) => {
    res.send("Lista de motos")
});


app.listen(3000, () => {
    console.log("hola");
})