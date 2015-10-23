var fs = require('fs')
var hash = require('crypto').createHash('sha256')
var ant = fs.readFileSync('ant.jpg').toString()
console.log(ant)
hash.update(ant)
console.log(hash.digest('hex'))


