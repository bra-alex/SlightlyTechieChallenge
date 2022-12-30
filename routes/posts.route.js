const express = require('express')

const postController = require('../controllers/posts.controller')

const postRouter  = express.Router()

postRouter.get('/', postController.httpGetPosts)
postRouter.get('/:postId', postController.httpGetPost)

postRouter.post('/', postController.httpCreatePost)
postRouter.patch('/:postId', postController.httpUpdatePost)

postRouter.delete('/', postController.httpDeletePost)

module.exports = postRouter