const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>');
});

app.get("/:name", (req, res) => {
    res.send('<h1>' + req.params.name + '</h1>');
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port + '/');
});