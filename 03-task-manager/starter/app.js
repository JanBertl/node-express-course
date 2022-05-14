const express = require('express');
const app = express();
const res = require('express/lib/response');
const connect = require('./db/connect')
const tasks = require('./router/task')
require('dotenv').config();
const port = 4444;



app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async () =>{
    try {
        await connect(process.env.MONGO_URI);
        app.listen(port, console.log("Server is listening on port " + port));
    } catch (err) {
        console.log(err)
    }
}

start();
