import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'

import { Post } from '../models/userInput'
import PostModel from '../models/posts.mongo'

async function getPosts() {
  return await PostModel.find({}, { _id: 0, __v: 0 })
}

async function getPost(filter: FilterQuery<Post>) {
  return await PostModel.findOne(filter)
}

async function createPost(post: Post) {
  return await PostModel.create(post)
}

async function updatePost(
  filter: FilterQuery<Post>,
  update: UpdateQuery<Post>,
  options: QueryOptions<Post>,
) {
  return await PostModel.findOneAndUpdate(filter, update, options)
}

async function deletePost(filter: FilterQuery<Post>) {
  return await PostModel.findOneAndDelete(filter)
}

export { getPosts, getPost, createPost, updatePost, deletePost }
