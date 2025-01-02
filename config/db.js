const mongoose = require('mongoose');
connectMongoDb = async(url)=>{
    return mongoose.connect(url).then(()=>{
        console.log("MongoDB connected!");
    }).catch((e)=>{
        console.log("MongoDB connection error",e);
    })
}

module.exports = connectMongoDb;