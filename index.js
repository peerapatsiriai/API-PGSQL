const express = require('express');
const { append } = require('express/lib/response');
const bodyParser = require("body-parser")
const App = express();

// use mider were
App.use(express.json());
require('dotenv').config();


// setup use POST method
App.use(bodyParser.urlencoded({
    extended:true
}))


const Route = require('./Routes/Routes')
//Route
App.use('/api',Route)

const PORT = process.env.PORT
App.listen(PORT,(err, res) => {
    if(err) console.log(err);
    console.log(`server run port ${PORT}`);
})