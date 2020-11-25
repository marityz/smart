const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },


    params: {
        type: Object,
        require: true,
    }


});


module.exports = mongoose.model('item', itemSchema);
