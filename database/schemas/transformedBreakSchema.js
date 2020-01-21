const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const RawSchema = new Schema({ 
    breakOne: { 
        type: String, 
        required: true,
    },
    breakOneLength: { 
        type: Number, 
        required: true,
    },
    breakTwo: { 
        type: String, 
    },
    breakTwoLength: { 
        type: Number, 
    }, 
    breakThree: { 
        type: String, 
    },
    breakThreeLength: { 
        type: Number, 
    }
})

module.exports = RawSchema
