const Task = require('../models/modelTask')
const checkForErrors = require('../middleware/async')

//rumpsielen mit JSON/JS
const getAllTasks = checkForErrors(async (req,res)=>{
        const tasks = await Task.find({})
        res.status(201).json({tasks, data :  tasks , arr : { randome : {erste :["hallo","ich","bin"], zweite : "SSSSS"}}})
})

const createTask = checkForErrors(async (req,res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({ task });
})

const  getTask = checkForErrors(async (req,re,next)=>{
    const {id : taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if(!task){
        const err = new Error('not found')
        err.status = 404
        return next(err)
    }
    res.status(201).json({task})
})

const updateTask = checkForErrors(async (req,res)=>{
    // const changedTask = await Task.findOne({ _id: req.params.id }).updateOne({ name:req.body.name, completed: req.body.completed})
    const updatedTask = await Task.findOneAndUpdate({_id : req.params.id},req.body,{
        new: true,
        // runValidators: true,
      })
    res.status(201).json(updatedTask)
})
const deleteTask =checkForErrors( async (req,res)=>{
    const deletedTask = await Task.findOneAndDelete({_id:req.params.id})
    res.status(201).json(deletedTask)
})

module.exports = { 
    getAllTasks, 
    createTask, 
    getTask,
    updateTask, 
    deleteTask 
}

//wieso muss nach Task.Funktion({}) ein {} sein
//wie funktioniert die async.js