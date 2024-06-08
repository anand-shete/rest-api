const express = require('express');
const app = express();
const port = 8000;

const connectMongoDb  = require('./connection/connect')
const userRouter = require('./routes/user')
const logReqRes = require("./middlewares")    // By deafult chooses index.js    

connectMongoDb('mongodb://localhost:27017/REST_api');

app.use(logReqRes('user-log.txt'));
app.use(express.urlencoded({ extended: false }));

app.use('/user',userRouter);

app.listen(port, () => {
    console.log(`Server started on port:${port}`);
})