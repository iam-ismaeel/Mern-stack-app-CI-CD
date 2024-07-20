const WorkoutsModel = require('../models/workoutsModels')
const mongoose = require('mongoose')
const getWorkouts = async (req,res) => {
    const workouts = await WorkoutsModel.find({}).sort({CreatedAt:-1})
    res.status(200).json(workouts)
}
const postWorkouts = async (req,res) => {
    const {title,reps,loads} = req.body
    const workouts = await WorkoutsModel.create({title,reps,loads})
    try{
        res.status(200).json(workouts)
    }
    catch(error) {
    res.status(404).json({error:error.message})
}}
const getSingleWorkouts = async (req,res) => {
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json('No such workouts')
}
const workouts = await WorkoutsModel.findById({id})
 if(!workouts) {
    res.status(404).json('No such workout,sorry')
 }
 res.status(200).json(workouts)
} 
const updateWorkouts = async (req,res) => {
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json('No such workouts')
}
const workouts = await WorkoutsModel.findOneAndUpdate({_id:id},...req.body)
 if(!workouts) {
    res.status(404).json('No such workout,sorry')
 }
 res.status(200).json(workouts)
} 
const deleteWorkouts = async (req,res) => {
    const{id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json('No such workouts')
}
const workouts = await WorkoutsModel.findOneAndDelete({_id:id})
 if(!workouts) {
    res.status(404).json('No such workout,sorry')
 }
 res.status(200).json(workouts)
} 

module.exports = {getWorkouts,getSingleWorkouts,postWorkouts,deleteWorkouts,updateWorkouts}