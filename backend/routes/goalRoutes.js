const express = require('express')
const router  = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {
    getGoal,
    setGoal,
    updateGoal,
    deleteGoal 
} = require('../controllers/goalController')


router.get('/', protect, getGoal)

router.post('/', protect, setGoal)

router.put('/:id', protect, updateGoal)

router.delete('/:id', protect, deleteGoal)

module.exports = router