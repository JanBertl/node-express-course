const mongoose = require('mongoose')

//definieren wie die Properties die gesendet werden aussehen sollen (Tabellendefinition)
const schema = mongoose.Schema(
    {
        name : {
            type : String,
            required:[true,'must provide name'],
            trim:true,
        },
        completed : {
            type: Boolean,
            default:false
        },
    }
);

module.exports = mongoose.model('Task', schema);

