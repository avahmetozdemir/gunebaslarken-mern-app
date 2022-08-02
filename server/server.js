import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'
dotenv.config()



const port = process.env.PORT || 3000;
const DB  =  process.env.DATABASE 
mongoose.connect(DB).then(()=> console.log('DB connection is successful'))

app.listen(port , ()=> {
    console.log(`App running on port ${port}...`)
})