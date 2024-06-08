const mongoose = require('mongoose');
connectMongoDb = async(url)=>{
    return mongoose.connect(url).then(()=>{
        console.log("Mongoose connected!");
    }).catch((e)=>{
        console.log("mongoose error is",e);
    })
}

module.exports = connectMongoDb;