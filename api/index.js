const server = require('./server');
const knex = require('./db/knex')
// const database = require('./helper/databaseHelper');


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