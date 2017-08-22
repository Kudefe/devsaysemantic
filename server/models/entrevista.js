import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

//en produccion, debo pedir todos los datos requeridos
const interviewSchema = new Schema({

  title: {
     type: String, required: true
    },
  title2: {
     type: String, required: true
   },
  author: {
     type: String, required: true
    },
  body: {
    type: String, required: true
   },
  units: {
    type: String,
    required: false,
    default: "N/A"
   },
  companyName: {
     type: String, required: false
    },
  published: {
    type: String , required: true
    },
  imageOne: {
    type: String,
    required: true
    },
  imageTwo: {
    type: String,
    required: true
    }
})

const Game = mongoose.model('Game', interviewSchema)

export default Game
