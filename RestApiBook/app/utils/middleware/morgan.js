const morgan = require ('morgan')
const fs = require ('fs')
const path = require('path')
const loggerStream = fs.createWriteStream(path.join(__dirname,"./../../../temp/logger.log"),{flags:"a"})

const logger = morgan("tiny", {stream:loggerStream})

module.exports = { logger }