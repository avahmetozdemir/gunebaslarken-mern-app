import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()
import protocolRouter from './routers/protocolRouter.js'
import impofdayRouter from './routers/impOfDayRouter.js'
//MIDDLEWARES

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=> {
    res.status(200).send('Hello')
})


//ROUTES
app.use('/api/v1/protocols', protocolRouter)
app.use('/api/v1/impofday',impofdayRouter )


export default app