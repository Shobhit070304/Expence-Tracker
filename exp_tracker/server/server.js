const express = require("express");
const app = express();
const cors = require('cors');

require('dotenv').config({ path: "./config.env" });
const port = process.env.PORT || 3000;

//use middleware
app.use(cors());
app.use(express.json()) // for parsing application/json


// mongodb connection
const con = require('./db/connection.js')

//using routes
app.use(require("./routes/routes"));

con.then(db => {
    if (!db) return process.exit(1);

    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })

    app.on('error', err => console.log(`Failed to connect with HTTP server : ${err}`))
    //error in mongodb connection
})
    .catch(error => {
        console.log(`Connection Failed...!${error}`);
    })