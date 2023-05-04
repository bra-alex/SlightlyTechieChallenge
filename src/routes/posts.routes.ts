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
postRouter.get('/post/:postId', httpGetPost)

postRouter.post('/post', httpCreatePost)
postRouter.put('/post/:postId', httpUpdatePost)

postRouter.delete('/post/:postId', httpDeletePost)

export default postRouter
