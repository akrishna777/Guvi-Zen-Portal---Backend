import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRouter from './Routes/userRouter.js'
import sessionRouter from './Routes/sessionRouter.js'
import additionalSessionRouter from './Routes/additionalSessionRouter.js'
import taskRouter from './Routes/taskRouter.js'
import queryRouter from './Routes/queryRouter.js'
import hackathonRouter from './Routes/hackathonRouter.js'
import capstoneRouter from './Routes/capstoneRouter.js'
import leaveRouter from './Routes/leaveRouter.js'

const app = express()
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/', (req, res) => {
  res.send('Welcome to Guvi Zen Portal API')
})

app.use('/user', userRouter)
app.use('/sessions', sessionRouter)
app.use('/additionalSessions', additionalSessionRouter)
app.use('/tasks', taskRouter)
app.use('/queries', queryRouter)
app.use('/hackathons', hackathonRouter)
app.use('/capstone', capstoneRouter)
app.use('/leaves', leaveRouter)

// const CONNECTION_URL =
//   'mongodb+srv://zenportal:zenportal123@cluster0.die9s.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
  )
  .catch((error) => console.log(error.message))
