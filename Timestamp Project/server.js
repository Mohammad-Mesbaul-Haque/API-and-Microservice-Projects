/*
 * Title: Timestamp Microservice
 * Description: It will print timestamp in an exact endpoint
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 27/06/2021
 */
 
// Dependencies.
 const express = require('express');
 
// App object or Module scaffolding.
const app = express()
 
// main functions or objects.
 app.get('/', (req, res)=>{
     res.json({"ok" : "yes!"})
 })
 
 

 // listening server
 app.listen(3000, ()=>{
     console.log(`listening timestamp app`);
 })
 
// export the module.
