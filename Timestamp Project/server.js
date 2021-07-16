/*
 * Title: Timestamp Microservice
 * Description: It will print timestamp in an exact endpoint
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 27/06/2021
 */
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors()); 


// index
app.get("/", function (req, res) {
  res.send('index page');
});

// timestamp API
app.get("/api/:date?", (req, res) => {
  const givenDate = req.params.date;
  let date;

  // check if no date provided
  if (!givenDate) {
    date = new Date();
  } else {
    // check if unix time:
    //    number string multiplied by 1 gives this number, data string gives NaN
    const checkUnix = givenDate * 1;
    date = isNaN(checkUnix) ? new Date(givenDate) : new Date(checkUnix);
  }

  //check if valid format
  if (date == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    const unix = date.getTime();
    const utc = date.toUTCString();
    res.json({ unix, utc });
  }
});

app.listen(3000, ()=>{
  console.log('Listening on port 3000');
})

// export the module.
