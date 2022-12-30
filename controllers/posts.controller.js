const postModel = require('../models/posts.model')

async function httpGetPosts(req, res){
    await postModel.getPosts()
}

async function httpGetPost(req, res){
    const postId = req.params.postId
    await postModel.getPost(postId)
}

async function httpCreatePost(req, res){
    const post = req.body
    await postModel.createPost(post)
}

async function httpUpdatePost(req, res){
    const postId = req.params.postId
    const post = req.body

    await postModel.updatePost(postId, post)
}

async function httpDeletePost(req, res){
    const postId = req.params.postId
    await postModel.deletePost(postId)
}

module.exports = {
    httpGetPosts,
    httpGetPost,
    httpCreatePost,
    httpUpdatePost,
    httpDeletePost
}