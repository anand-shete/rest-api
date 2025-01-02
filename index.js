const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const connectDB = require('./config/db')
const userRouter = require('./routes/user')
const logReqRes = require("./middlewares")    // By deafult chooses index.js    

connectDB(process.env.MONGO_URL);

app.use(logReqRes('user-log.txt'));
app.use(express.urlencoded({ extended: false }));       // middleware to parse form data

app.use('/api', userRouter);

app.listen(PORT, () => console.log(`Server started on PORT:${PORT}`))