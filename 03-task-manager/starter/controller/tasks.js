const getAllTasks = (req,res)=>{
    res.send("get all tasks")
}
const createTask = (req,res)=>{
    res.send("creates a task")
}
const  getTask = (req,res)=>{
    res.send("get singel task")
}
const updateTask = (req,res)=>{
    res.send("update Task")
}
const deleteTask = (req,res)=>{
    res.send("delete Task")
}

module.exports = { getAllTasks, createTask, getTask,updateTask, deleteTask }
