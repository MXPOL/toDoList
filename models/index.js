
const mongoose = require('mongoose');

const logger = require('../utils/logger');
const config = require('../utils/config');


logger.info('connecting to', config.MONGODB_URI);

mongoose.connect(config.MONGODB_URI ,{useNewUrlParser : true , useUnifiedTopology: true , useFindAndModify: false})
    .then(result =>{  
        logger.info('connected to MongoDB')  
    })  
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
    });



module.exports.Todo = require("./todo") ;