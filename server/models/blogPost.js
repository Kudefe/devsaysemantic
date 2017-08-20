import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  title2: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  }
})

const Blog = mongoose.model('Blog', blogPostSchema)

export default Blog
