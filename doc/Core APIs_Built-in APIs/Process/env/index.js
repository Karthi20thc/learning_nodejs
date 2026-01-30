const { env } = require('node:process')

env.test = 'hello';
console.log(env);