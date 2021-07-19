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
const dns = require('dns');
const urlParser = require('url');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


 
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


// Creating a schema for data
const schema = mongoose.Schema({url: String});
const Url = mongoose.model('Url', schema);

// apps permissions
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());
// main functions or objects.
 
app.get('/', (req, res)=>{
    res.send('ok');
});


app.post('/api/shorturl/new', (req, res)=>{
    const bodyurl = req.body.url;

    const parser = dns.lookup(urlParser.parse(bodyurl).hostname, (error, address)=>{
        if (!address) {
            res.json({"error": "Invalid URL"})
        } else{
            const url = new Url({url: bodyurl})
            url.save((err, data)=>{
                res.json({
                    original_url : data.url,
                    short_url : data.id
                })
            })
        }
    })

})

// get and redirect url
app.get('/api/shorturl/:id', (req, res)=>{
    const id = req.params.id;
    Url.findById(id, (err, data)=>{
        if (!data) {
            res.json({error: "invalid URL"})
        } else {
            res.redirect(data.url);
        }
    })
})



app.listen(process.env.PORT, ()=>{
    console.log('Listening on port' + process.env.PORT);
})
 
 
 
// export the module.
 

// free code version
// require('dotenv').config();
// const express = require('express');
// const dns = require('dns')
// const urlParser = require('url');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose')
// const app = express();


// // connection with mongodb
// mongoose.connect(process.env.str, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(()=>{
//     console.log(`Connection successful`);
// })
// .catch((e)=>{
//     console.log(e);
// })


// // Creating a schema for data
// const schema = mongoose.Schema({url: String});
// const Url = mongoose.model('Url', schema);

// // apps permissions
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(cors());

// // Basic Configuration
// const port = process.env.PORT || 3000;

// app.use(cors());

// app.use('/public', express.static(`${process.cwd()}/public`));

// app.get('/', function(req, res) {
//   res.sendFile(process.cwd() + '/views/index.html');
// });

// // Your first API endpoint
// app.get('/api/hello', function(req, res) {
//   res.json({ greeting: 'hello API' });
// });


// // My endpoint post
// app.post('/api/shorturl', (req, res)=>{
//     const bodyurl = req.body.url;

//     const parser = dns.lookup(urlParser.parse(bodyurl).hostname, (error, address)=>{
//         if (!address) {
//             res.json({"error": "Invalid URL"})
//         } else{
//             const url = new Url({url: bodyurl})
//             url.save((err, data)=>{
//                 res.json({
//                     original_url : data.url,
//                     short_url : data.id
//                 })
//             })
//         }
//     }) 

// })



// // get and redirect url
// app.get('/api/shorturl/:short_url', (req, res)=>{
//     const id = req.params.short_url;
//     Url.findById(id, (err, data)=>{
//         if (!data) {
//             res.json({error: "invalid URL"})
//         } else {
//             res.redirect(data.url);
//         }
//     })
// })



// app.listen(port, function() {
//   console.log(`Listening on port ${port}`);
// });
