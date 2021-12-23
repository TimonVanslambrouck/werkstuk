const knex = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});

(async () => {
    try {
        knex.schema.hasTable('teams').then(function (exists) {
            if (!exists) {
                return knex.schema.createTable('teams', function (t) {
                    t.increments('team_id').primary();
                    t.string('team', 100).notNullable();
                    t.timestamps();
                });
            }
        }).then(
            knex.schema.hasTable('users').then(function (exists) {
                if (!exists) {
                    return knex.schema.createTable('users', function (t) {
                        t.increments('id').primary();
                        t.string('username', 100).notNullable();
                        t.foreign('team_id').unsigned();
                        t.foreign('team_id').references('team_id').inTable('teams');
                        t.timestamps();
                    });
                }
            })
        ).then(
            knex('teams').insert({
                team: 'Los Angeles Lakers',
            })
        )

    } catch (error) {

    }
})


module.exports = knex;