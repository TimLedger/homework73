const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;
const password = 'tledger';

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get('/echo/:name', (req, res) => {
    res.send('<h1>' + req.params.name + '</h1>');
});

app.get('/encode/:string', (req, res) => {
    res.send('<h1>' + Vigenere.Cipher(password).crypt(req.params.string) + '</h1>');
});

app.get('/decode/:string', (req, res) => {
    res.send('<h1>' + Vigenere.Decipher(password).crypt(req.params.string) + '</h1>');
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port + '/');
});