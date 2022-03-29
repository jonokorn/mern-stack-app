const asyncHandler = require('express-async-handler')




//desc  : Get Goal
//route : GET /api/goals
//access: Private
const getGoal = asyncHandler (async (req, res) => { 
    res.status(200).json({
        message: 'Get Goal'
    })
})




//desc  : Set Goal
//route : POST /api/goals
//access: Private
const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'Set Goal'
    })
})




//desc  : Update Goal
//route : PUT /api/goals
//access: Private
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})




//desc  : Delete Goal
//route : DELETE /api/goals
//access: Private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})

module.exports = {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal
}