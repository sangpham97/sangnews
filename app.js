const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const authRoute = require('./routes/auth')
const NewsRoute = require('./routes/News')
const CommentRoute = require('./routes/comment')

require('dotenv').config()

const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
//CONNECTDB
const connectDB = require('./db/connect')

connectDB(process.env.MONGO_URL)

app.use(express.json())

//ROUTES

app.use(cors({}))

app.use('/api/auth', authRoute)
app.use('/api/news', NewsRoute)
app.use('/api/comments', CommentRoute)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
