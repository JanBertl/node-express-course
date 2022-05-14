const express = require('express');
const router = express.Router();
const {getAllTasks,createTask, getTask,updateTask, deleteTask} = require('../controller/tasks')

router.route('/').get(getAllTasks)
// .post(createTask);
// router.route('/create').get(createTask);
// router.route('/get').get(getTask);
// router.route('/update').get(updateTask);
// router.route('/delete').get(deleteTask);
// router.route('/').get(getAllTasks)


// router.route('/').get((req,res)=>{
//     res.send('This is the response.')
// })

module.exports = router

