
/**********************************************************************************
 * IMPORTS
 **********************************************************************************/
const express = require('express');
const Sensor = require('./Sensor');
const SampleRepository = require('./SampleRepository');


/**********************************************************************************
 * READ FROM SENSOR EVERY 1 SEC
 **********************************************************************************/

setInterval(async () => {
    const rawValue = Sensor.read();
    const value = rawValue;

    await SampleRepository.createNewSample(value, rawValue);
}, 1000);


/**********************************************************************************
 * SERVE ON WEB
 **********************************************************************************/

const app = express();

app.get('/', async (req, res) => {
    console.log(`New request! body: ${req.body}, query: ${JSON.stringify(req.query)}`);

    const allSamples = await SampleRepository.getAllSamples();

    res.send(`
        <html lang="kr">
            <head>
                <title>Coding Party</title>
            </head>
            <body>
                Welcome to the <b>Coding Party</b>
                
                <ul>
                    ${allSamples.map(sample => `<li>${JSON.stringify(sample)}</li>`).join()}
                </ul>
            </body>
        </html>
    `);
});

const port = 3000;

app.listen(port);

console.log(`Server started listening on port ${port}!`);
