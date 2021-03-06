const express          = require('express')
const req              = require('express/lib/request')
const dotenv           = require('dotenv').config()
const { errorHandler}  = require('./middleware/errorMiddleware')
const port             = process.env.PORT || 8000
const colors           = require('colors')
const connectDB        = require('./config/db')


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/posts', require('./routes/postRoutes'))
app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
