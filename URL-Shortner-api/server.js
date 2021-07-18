/*
 * Title: URL SHORTENER API
 * Description: Url shortener api
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 19/07/2021
 */
 
// Dependencies.
require('dotenv').config();
 const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


 
// App object or Module scaffolding.
const app = express(); 

// connection with mongodb
mongoose.connect(process.env.str, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Connection successful`);
})
.catch((e)=>{
    console.log(e);
})


// main functions or objects.
 
app.get('/', (req, res)=>{
    res.send('ok');
});




app.listen(process.env.PORT, ()=>{
    console.log('Listening on port' + process.env.PORT);
})
 
 
 
// export the module.
 