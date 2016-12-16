'use strict';

const env = process.env.NODE_ENV || 'dev';
console.log(`Wepback is running in : ${env}`);

module.exports = require(`./build/webpack.${env}.config.js`);