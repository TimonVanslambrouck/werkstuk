const SERVER = require('../../index');
const supertest = require('supertest');
const DATABASE = require('../../db/knex');
const REQUEST = supertest(SERVER);

let exampleTeams = [{
        id: 1,
        team: 'Los Angeles Lakers'
    },
    {
        id: 2,
        team: 'Boston Celtics'
    },
    {
        id: 3,
        team: 'Golden State Warriors'
    }
]

let exampleUsers = [{
        team: 1,
        username: 'lakersfan21'
    },
    {
        team: 2,
        username: 'celticsforever'
    },
    {
        team: 3,
        username: 'curry30'
    }
]

describe('testing postgres', () => {
    test('adding user', async (done) => {
        try {
            let uuid = null;
            await REQUEST.post('/user')
                .send(exampleUsers[0])
                .expect(200)
                .then((resp) => resp.body.res)
                .then((res) => {
                    uuid = res[0].uuid
                }).catch((e) => {
                    console.log(e)
                })
            await DATABASE.raw('BEGIN');
            DATABASE.select('*').table("users").where({
                    uuid
                }).then((rows) => {
                    console.log(rows)
                    expect(rows).toBeInstanceOf(Array);
                    expect(rows.length).toBe(1);
                })
                .then(() => {
                    done();
                })
        } catch (err) {
            throw err;
        } finally {}
    })
});