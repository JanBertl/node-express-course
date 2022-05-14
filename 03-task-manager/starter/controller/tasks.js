const getAllTasks = (req,res)=>{
    res.send()
}
const createTask = (req,res)=>{
    res.json(req.body)
}
const  getTask = (req,res)=>{
    res.json({ID : req.params.id})
}
const updateTask = (req,res)=>{
    res.json(req.params)
}
const deleteTask = (req,res)=>{
    res.json(req.params.id)
}

module.exports = { getAllTasks, createTask, getTask,updateTask, deleteTask }
