const knexConfig = require('../../config/knexfile');
const knex = require('knex')(knexConfig.development);
module.exports = knex;
