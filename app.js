const express = require('express');
const cors = require('cors');

const middleware = require('./utils/middleware')
const config = require('./utils/config');
const todoRoutes = require('./routers/todos');


const app = express();

app.use(cors());
app.use(express.static(__dirname + '/public') ) ; 
app.use(express.json());
if(process.env.NODE_ENV !== 'test'){
    app.use(middleware.requestLogger);
}


app.use("/api/todo",todoRoutes);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app