require('dotenv');
const knex = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://user:password@db:5432/postgres'
});

(async () => {
    try {
        knex.schema.hasTable('teams').then(function (exists) {
                if (!exists) {
                    return knex.schema.createTable('teams', function (t) {
                        t.increments('teamId').primary();
                        t.string('team', 100).notNullable().unique();
                    });
                }
            })
            .then(
                knex.schema.hasTable('users').then(function (exists) {
                    if (!exists) {
                        return knex.schema.createTable('users', function (t) {
                            t.increments('id').primary();
                            t.integer('team').unsigned().notNullable();
                            t.string('username', 100).notNullable();
                            t.foreign('team').references('teamId');
                        });
                    }
                })
            )

    } catch (error) {

    }
})();


module.exports = knex;