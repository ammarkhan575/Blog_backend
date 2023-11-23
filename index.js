// imports
const express = require('express');
const blog = require('./routes/blog');
const connectWithDb = require('./config/database');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// middleware
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI;

// mount
app.use('/api/v1',blog);

app.get('/',(req,res)=>{
    res.send('<h1> This is HomePage </h1>');
})

app.listen(8000, ()=>{
    console.log("App is running on Port 8000");
});



connectWithDb(MONGO_URI);