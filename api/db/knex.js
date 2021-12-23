const knex = require('knex')({
    client: 'pg',
    version: '9.6',
    searchPath: ['knex', 'public'],
    connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});

knex.schema.hasTable('teams').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('teams', function (t) {
            t.increments('team_id').primary();
            t.string('team', 100).notNullable();
            t.timestamps();
        });
    }
});
knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('username', 100).notNullable();
            t.foreign('team_id').unsigned().references('team_id').inTable('teams');
            t.timestamps();
        });
    }
});

module.exports = knex;