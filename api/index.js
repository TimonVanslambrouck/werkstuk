const server = require('./server');
const postgressDatabase = require('./db/knex')
// const database = require('./helper/databaseHelper');


/* 
 *   USER DATABASE
 */


/**
 * [GET]
 * returns all users in database
 */
server.get('/users', function (req, res) {
    postgressDatabase.select().from('users').then(data => {
        return res.sendStatus(200).json(data);
    })
});

/**
 * [POST]
 * inserts a new user in the database
 */
server.post('/user', function (req, res) {
    const user = req.query;
    postgressDatabase('users').insert(user).then(() => {
        return res.sendStatus(200);
    })
});

/**
 * [PUT]
 * updates specific data from specific user by id
 */
server.put('/user/:id', function (req, res) {
    const userId = req.params.id;
    const updateQuery = req.query;
    postgressDatabase('users').where({
        id: userId
    }).update(updateQuery).then(() => {
        return res.sendStatus(200);
    })
})

/**
 * [DELETE]
 * deletes specific user by id
 */
server.delete('/user/:id', function (req, res) {
    const userId = req.params.id;
    postgressDatabase('users').where({
        id: userId
    }).del().then(() => {
        res.sendStatus(200);
    })
})


/* 
 *   TEAM DATABASE
 */


/**
 * [GET]
 * returns all teams in database
 */
server.get('/teams', function (req, res) {
    postgressDatabase.select().from('teams').then(data => {
        return res.sendStatus(200).json(data);
    })
});

/**
 * [POST]
 * inserts a new team in the database
 */
server.post('/team', function (req, res) {
    const team = req.query;
    postgressDatabase('teams').insert(team).then(() => {
        return res.sendStatus(200);
    })
});

/**
 * [PUT]
 * updates specific data from specific team by id
 */
server.put('/team/:id', function (req, res) {
    const teamId = req.params.id;
    const updateQuery = req.query;
    postgressDatabase('teams').where({
        id: teamId
    }).update(updateQuery).then(() => {
        return res.sendStatus(200);
    })
})

/**
 * [DELETE]
 * deletes specific team by id
 */
server.delete('/team/:id', function (req, res) {
    const teamId = req.params.id;
    postgressDatabase('teams').where({
        team_id: teamId
    }).del().then(() => {
        res.sendStatus(200);
    })
})