const postModel = require('../models/posts.model')

async function httpGetPosts(req, res, next){
    const posts = await postModel.getPosts(next)

    if(posts.length <= 0){
        return res.status(404).json({
            message: 'No posts found'
        })
    }

    res.status(200).json({
        posts
    })
}

async function httpGetPost(req, res, next){
    const postId = req.params.postId
    const post = await postModel.getPost(postId, next)
    
    if(!post){
        return res.status(404).json({
            message: 'Post not found'
        })
    }

    res.status(200).json({
        post
    })
}

async function httpCreatePost(req, res, next){
    const post = req.body

    if (!post.title || !post.content || !post.author) {
        return res.status(404).json({
            message: 'Missing post parameter'
        })
    }
    await postModel.createPost(post, next)

    res.status(201).json({
        message: 'Post created successfully',
        post
    })
}

async function httpUpdatePost(req, res, next){
    const postId = req.params.postId
    const post = req.body

    const exists = await postModel.postExists(postId, next)

    if(!exists){
        return res.status(404).json({
            message: 'Post does not exist'
        })
    }

    if (!post.title || !post.content || !post.author) {
        return res.status(404).json({
            message: 'Missing post parameter'
        })
    }

    await postModel.updatePost(postId, post, next)

    res.status(200).json({
        message: 'Post updated',
        post
    })
}

async function httpDeletePost(req, res, next){
    const postId = req.params.postId

    const exists = await postModel.postExists(postId, next)

    if(!exists){
        return res.status(404).json({
            message: 'Post does not exist'
        })
    }

    await postModel.deletePost(postId, next)

    res.status(204)
}

module.exports = {
    httpGetPosts,
    httpGetPost,
    httpCreatePost,
    httpUpdatePost,
    httpDeletePost
}