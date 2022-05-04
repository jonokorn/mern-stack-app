const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')
const User = require('../models/userModel')


//desc  : Get Posts
//route : GET /api/posts
//access: Private
const getPost = asyncHandler (async (req, res) => { 
    const posts = await Post.find( { user : req.user.id })
    res.status(200).json(posts)
})


//desc  : Set Post
//route : POST /api/posts
//access: Private
const setPost = asyncHandler (async (req, res) => {
    if(!req.body.text || !req.body.title) {
        res.status(400)
        throw new Error('Please enter a title and a text!')
    }

    const post = await Post.create({
        title:req.body.title,
        text: req.body.text,
    })

    res.status(200).json(post)
})


//desc  : Update Post
//route : PUT /api/posts
//access: Private
const updatePost = asyncHandler (async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Post not found')
    }

    //No user found
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(post.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id,
         req.body, {
            new: true,
    })
    res.status(200).json(updatePosts)
})


//desc  : Delete Post
//route : DELETE /api/posts
//access: Private
const deletePost = asyncHandler (async (req, res) => {
    const post = await Post.findById(req.params.id)
    if(!post) {
        res.status(400)
        throw new Error('Not found')
    }
    
    //No user found
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    if(post.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }
    await post.remove()
    res.status(200).json({ id : req.params.id })
})

module.exports = {
    getPost,
    setPost,
    updatePost,
    deletePost,
}
