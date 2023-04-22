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
  releaseYear: {
    type: Number,
    required: true,
    match: /^(1[0-9]{3}|2[0-9]{3}|9[0-9]{2}|[1-9][0-9]{2})$/,
    min: 1000,
    max: 9999
  },
  opinions: [{type: Schema.Types.ObjectId, ref: 'Opinion'}],
}, {
  timestamps: true
})

const MediaType = mongoose.model('MediaType', mediaTypeSchema)

export {
  MediaType,
}