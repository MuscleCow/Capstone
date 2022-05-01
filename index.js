const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(`New request! body: ${req.body}, query: ${JSON.stringify(req.query)}`);

    res.send(`
        <html lang="kr">
            <head>
                <title>Coding Party</title>
            </head>
            <body>
                Welcome to the <b>Coding Party</b>
            </body>
        </html>
    `);
});

const port = 3000;

app.listen(port);

console.log(`Server started listening on port ${port}!`);
