const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/pagina-dos', (req, res) => {
    res.sendFile(__dirname + '/views/pagina-dos.html');
});

app.listen(port, () => {
    console.log('Server on port ' + port);
});