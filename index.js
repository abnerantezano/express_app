const express = require('express');
const app = express();

// Clientes data
const clientes = [];

// Productos data
const productos = [];


app.get('/clientes', (req, res) => {
	res.status(200);
	res.send("Clientes");
});

app.get('/productos', (req, res) => {
	res.status(200);
	res.send("Productos");
});

// Expose PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

