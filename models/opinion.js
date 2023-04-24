import mongoose from 'mongoose'

const Schema = mongoose.Schema

const opinionSchema = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  text: { 
    type: String,
    required: true,
  },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})

const Opinion = mongoose.model('Opinion', opinionSchema)

export {
  Opinion
}