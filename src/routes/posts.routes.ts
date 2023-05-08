import express from 'express'

import {
  httpGetPosts,
  httpGetPost,
  httpCreatePost,
  httpUpdatePost,
  httpDeletePost,
} from '../controllers/posts.controller'

const postRouter = express.Router()

postRouter.get('/posts', httpGetPosts)
postRouter.get('/posts/:postId', httpGetPost)

postRouter.post('/posts', httpCreatePost)
postRouter.put('/posts/:postId', httpUpdatePost)

postRouter.delete('/posts/:postId', httpDeletePost)

export default postRouter
