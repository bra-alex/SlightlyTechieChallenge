import mongoose from 'mongoose'

export interface Post extends mongoose.Document {
  title: string
  content: string
  author: string
}
