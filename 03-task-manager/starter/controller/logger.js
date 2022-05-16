const log = (req,res,next) => {
    console.log("the middlware")    
    next()
}

module.exports = log