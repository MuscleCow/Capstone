const mysql = require('mysql2/promise');

module.exports = {
    async getAllSamples() {
        console.log('Get all samples!');
        return await query('SELECT * FROM samples');
    },

    async createNewSample(value, rawValue) {
        console.log('Create new sample!');
        await query('INSERT INTO SAMPLES(value, raw_value) VALUES (?, ?)', value, rawValue);
    }
}

async function query(sql, ...values) {
    const connection = await getConnection();

    const [results] = await connection.query(sql, values);

    return results;
}

async function getConnection()
{
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'gnu',
        password: '1234',
        database: 'capstone'
    });
}