const server = require('./server');
// const database = require('./helper/databaseHelper');

const database = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
});

database.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('first_name', 100);
            t.string('last_name', 100);
            t.text('bio');
        });
    }
});

/**
 * [GET]
 * returns specific user by id
 */
server.get('/user/:id', function (req, res) {
    const userId = req.params.id;
    res.send('Got a GET request at /user');
});

/**
 * [POST]
 * returns specific user by id
 */
server.post('/user/', function (req, res) {
    const user = req.query;
    res.send('Got a POST request at /user');
});

/**
 * [PUT]
 * updates specific data from specific user by id
 */
server.put('/user/:id', function (req, res) {
    const userId = req.params.id;
    const updateQuery = req.query;
    res.send('Got a PUT/UPDATE request at /user');
})

/**
 * [DELETE]
 * deletes specific user by id
 */
server.delete('/user/:id', function (req, res) {
    const userId = req.params.id;
    res.send('Got a DELETE request at /user');
})