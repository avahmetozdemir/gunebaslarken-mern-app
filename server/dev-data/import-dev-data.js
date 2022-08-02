import fs from 'fs'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Protocol from '../models/protocol.js'
import ImpOfDay from '../models/impOfDay.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config()
const DB = 'mongodb+srv://Ahmet:Password8067.@cluster0.1fgooyb.mongodb.net/gunebaslarken?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>console.log('DB connection is successful'))

//READ JSON FILE
const protocols = JSON.parse(
    fs.readFileSync(`${__dirname}/data/protocol.json`, 'utf-8')
)

//IMPORT DATA INTO DB
//Bulk Insert
const importData =  async ()=> {
    try {
        await Protocol.create(protocols)
        console.log('Data successfully loaded!');
    } catch (error) {
        console.log(error);
    }
    process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
    try {
      await Protocol.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };


if(process.argv[2] === '--import') {
    importData()
} else if (process.argv[2] === '--delete'){
    deleteData()
}