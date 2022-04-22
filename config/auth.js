require('dotenv').config();
const { AUTH_SECRET, AUTH_EXPIRES, AUTH_ROUNDS } = process.env;
module.exports = {
    secret: AUTH_SECRET,
    expires: AUTH_EXPIRES,
    rounds: AUTH_ROUNDS,
}