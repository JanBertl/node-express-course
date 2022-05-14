const express = require('express');
const res = require('express/lib/response');
const app = express();
const tasks = require('./router/task')

const port = 4444;

app.listen(port, console.log("Server is listening on port " + port));


app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('is it working')
// })

app.use('/api/v1/tasks', tasks)

