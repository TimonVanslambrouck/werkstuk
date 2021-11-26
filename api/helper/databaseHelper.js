const database = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
});

exports.module = {
    data
}