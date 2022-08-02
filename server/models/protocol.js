import mongoose from 'mongoose'

const protocolSchema = new mongoose.Schema({
    id: Number,
    rule: String,
    tradition:String,
    word:String,
    author:String,
    authorWho:String,
    imageOfAuthor: String
})

const Protocol = mongoose.model('Protocol', protocolSchema)

export default Protocol