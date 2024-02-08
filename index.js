const { strict } = require('assert');
const express = require('express');
const app = express();
const port = 8000;

const connectMongoDb  = require('./connection/connection')
const userRouter = require('./routes/user')
const logReqRes = require("./middlewares")    // By deafult chooses index.js    
app.use(express.urlencoded({ extended: false }));//Middleware which parses form data to body (use at start only)

connectMongoDb('mongodb://localhost:27017/attendaces2');

app.use(logReqRes('log.txt'));

app.use('/user',userRouter);

app.listen(port, () => {
    console.log(`Server started on port:${port}`);
})