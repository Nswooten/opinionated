import mongoose from 'mongoose'

const Schema = mongoose.Schema

const mediaTypeSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  creator: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Game", "Movie", "Book"],
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  opinions: [{type: Schema.Types.ObjectId, ref: 'Opinion'}],
}, {
  timestamps: true
})

const MediaType = mongoose.model('MediaType', mediaTypeSchema)

export {
  MediaType,
}