const express = require('express')

const postController = require('../controllers/posts.controller')

const postRouter  = express.Router()

postRouter.get('/posts', postController.httpGetPosts)
postRouter.get('/post/:postId', postController.httpGetPost)

postRouter.post('/post', postController.httpCreatePost)
postRouter.put('/post/:postId', postController.httpUpdatePost)

postRouter.delete('/post/:postId', postController.httpDeletePost)

module.exports = postRouter