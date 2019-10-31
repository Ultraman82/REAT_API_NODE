const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: {type: Number, required:true 
        }
});


module.exports = mongoose.model('Product', productsSchema);