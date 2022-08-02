import mongoose from 'mongoose'

const impOfDaySchema = new mongoose.Schema({
    "1": String,
    "2": String,
    "3": String,
    "4": String,
    "5": String,
    "6": String,
    "7": String,
    "8": String,
    "9": String,
    "10": String,
    "11": String,
    "12": String,
    "13": String,
    "14": String,
    "15": String,
    "16": String,
    "17": String,
    "18": String,
    "19": String,
    "20": String,
    "21": String,
    "22": String,
    "23": String,
    "24": String,
    "25": String,
    "26": String,
    "27": String,
    "28": String,
    "29": String,
    "30": String,
    "31": String,
    "id": Number
})

const ImpOfDay = mongoose.model('ImpOfDay', impOfDaySchema)

export default ImpOfDay