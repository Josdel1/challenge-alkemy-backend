'use strict'

require('dotenv').config();

const { DB_NAME, DB_USER, DB_PASS, DB_PORT, DB_HOST } = process.env;

module.exports = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql',


    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',

    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',

}
