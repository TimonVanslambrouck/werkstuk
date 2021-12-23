const knex = require('knex')({
    client: 'pg',
    searchPath: ['knex', 'public'],
    connection: process.env.POSTGRES_CONNECTION_STRING ? process.env.POSTGRES_CONNECTION_STRING : 'postgres://user:password@localhost:5432/postgress'
});

knex.schema.hasTable('users').then(function (exists) {
    if (!exists) {
        return knex.schema.createTable('users', function (t) {
            t.increments('id').primary();
            t.string('username', 100).notNullable();
            t.foreign('team_id').references('team.id').inTable('teams');
            t.timestamps();
        });
    }
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

module.exports = knex;