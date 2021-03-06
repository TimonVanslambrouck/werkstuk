const express = require("express");
const SERVER = express();
const POSTGRESSDATABASE = require('./db/knex');
const {
    checkUsername
} = require('./helper/databaseHelper');

SERVER.use(express.json());
SERVER.use(express.urlencoded({
    extended: true
}));

//SOURCE: https://stackoverflow.com/a/24344756

/* 
 *   USER DATABASE
 */

SERVER.get('/', function (req, res) {
    return res.sendStatus(200);
})


/**
 * [GET]
 * returns all users in database
 */
SERVER.get('/users', function (req, res) {
    POSTGRESSDATABASE.select().from('users').then(data => {
        return res.status(200).json(data);
    })
});

/**
 * [POST]
 * inserts a new user in the database
 */
SERVER.post('/user', function (req, res) {
    const user = req.query;
    if (checkUsername(user.username)) {
        POSTGRESSDATABASE('users').insert(user).then(() => {
            return res.sendStatus(200);
        })
    } else {
        return res.sendStatus(400);
    }

});

/**
 * [PUT]
 * updates specific data from specific user by id
 */
SERVER.put('/user/:id', function (req, res) {
    const userId = req.params.id;
    const updateQuery = req.query;
    POSTGRESSDATABASE('users').where({
        id: userId
    }).update(updateQuery).then(() => {
        return res.sendStatus(200);
    })
})

/**
 * [DELETE]
 * deletes specific user by id
 */
SERVER.delete('/user/:id', function (req, res) {
    const userId = req.params.id;
    POSTGRESSDATABASE('users').where({
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
SERVER.get('/teams', function (req, res) {
    POSTGRESSDATABASE.select().from('teams').then(data => {
        return res.json(data);
    })
});

/**
 * [POST]
 * inserts a new team in the database
 */
SERVER.post('/team', function (req, res) {
    const team = req.query;
    POSTGRESSDATABASE('teams').insert(team).then(() => {
        return res.sendStatus(200);
    })
});

/**
 * [PUT]
 * updates specific data from specific team by id
 */
SERVER.put('/team/:id', function (req, res) {
    const teamId = req.params.id;
    const updateQuery = req.query;
    POSTGRESSDATABASE('teams').where({
        teamId: teamId
    }).update(updateQuery).then(() => {
        return res.sendStatus(200);
    })
})

/**
 * [DELETE]
 * deletes specific team by id
 */
SERVER.delete('/team/:id', function (req, res) {
    const teamId = req.params.id;
    POSTGRESSDATABASE('teams').where({
        teamId: teamId
    }).del().then(() => {
        res.sendStatus(200);
    })
})

module.exports = SERVER;