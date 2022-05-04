const express = require('express')
const router  = express.Router()
const {protect} = require('../middleware/authMiddleware')
const {
    getPost,
    setPost,
    updatePost,
    deletePost 
} = require('../controllers/PostController')


router.get('/', protect, getPost)

router.post('/', protect, setPost)

router.put('/:id', protect, updatePost)

router.delete('/:id', protect, deletePost)

module.exports = router