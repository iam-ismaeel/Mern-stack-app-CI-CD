const express = require('express')
const { getWorkouts, getSingleWorkouts, postWorkouts, deleteWorkouts, updateWorkouts } = require('../controllers/controllers')
const routes = express.Router()


routes.get('/',getWorkouts)
routes.get('/:id',getSingleWorkouts)
routes.post('/',postWorkouts)
routes.delete('/:id',deleteWorkouts)
routes.patch('/:id',updateWorkouts)
module.exports = routes
