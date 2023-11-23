const mongoose = require('mongoose');


const connectWithDb = (MONGO_URI)=>{
    mongoose.connect(MONGO_URI,{
    }).then(()=>{
        console.log('DB connected successfully');
    }).catch((error)=>{
        console.log('Error while connecting to database');
        console.log(error);
    })
}

module.exports = connectWithDb;