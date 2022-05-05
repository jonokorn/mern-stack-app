const jwt          = require('jsonwebtoken')
const bcrypt       = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User         = require('../models/userModel')

//desc  : Register User
//route : POST /api/users
//access: Public
const registerUser =asyncHandler(
    async (req,res) => {

        const {username,password }  = req.body

        if(!username || !password) {
            res.status(400)
            throw new Error('Please add all fields')
        }

        const userExists = await User.findOne({username})

        if(userExists) {
            res.status(400)
            throw new Error('User already exists')
        }

        // Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // Create User
        const user = await User.create({
            username,
            password: hashedPassword
        })

        if(user){
            res.status(201).json({
                _id: user.id,
                username: user.username
            })
        } else {
            res.status(400)
            throw new Error('Invalid User Data')
        }
    }
)


//desc  : Authenticate User
//route : POST /api/users/login
//access: Public
const loginUser = asyncHandler(
    async (req,res) => {
        const {username, password} = req.body

        //Check for user email adress
        const user = await User.findOne({username})

        if(user && (await bcrypt.compare(password,user.password))) {
            res.status(201).json({
                _id: user.id,
                username: user.username,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid Authentication Data')
        }
    }
) 

//desc  : Get User Data
//route : GET /api/users/me
//access: Public
const getMe = asyncHandler(
    async (req,res) => { 
        res.status(200).json(req.user)
    }
)

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'})
}

module.exports = {registerUser, loginUser, getMe}