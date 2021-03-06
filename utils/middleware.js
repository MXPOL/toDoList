const logger = require('./logger');
const morgan = require('morgan');

const requestLogger = morgan('tiny');

const unknownEndpoint = (req,res) => {
    res.status(404).send({error : 'unknown endpoint'})
}

const errorHandler = (error,req,res, next) => {
    logger.error(error)
    return res.status(400).send({error : error});
    next(error);
    
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
}