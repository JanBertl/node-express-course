const mongoose = require('mongoose')

const schema = mongoose.Schema(
    {
        name : {type : String},
        desc : {type : String},
    }
)

module.exports = mongoose.model('Products', schema)
