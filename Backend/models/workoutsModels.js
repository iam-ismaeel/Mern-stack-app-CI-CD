const mongoose = require('mongoose')
const Schema = mongoose.Schema
const WorkoutSchema = new Schema({
    title : {
        type: String,
        require : true
    },
    reps : {
        type: Number,
        require : true
    },
    loads : {
        type: Number,
        require : true
    },
},{timestamps:true})
const model = mongoose.model('Workout',WorkoutSchema)
module.exports = model
