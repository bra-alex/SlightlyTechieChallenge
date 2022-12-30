const Post = require('../models/posts.mongo')

async function getPosts(next) {
    try {
        return await Post.find({},
            {
                '_id': 0,
                '__v': 0
            })
    } catch (e) {
        console.log(e)
        e.message = 'Error fetching posts from the database'
        next(e)
    }
}

async function getPost(postID, next) {
    try {
        return await Post.findById(postID,
            {
                '_id': 0,
                '__v': 0
            })
    } catch (e) {
        console.log(e)
        e.message = 'Error fetching post from the database'
        next(e)
    }
}

async function createPost(post, next) {
    try {
        const newPost = new Post(post)
        await newPost.save()
        console.log('Saved')
    } catch (e) {
        console.log(e)
        e.message = 'Error creating post'
        next(e)
    }
}

async function updatePost(postId, post, next) {
    try {
        await Post.findByIdAndUpdate(postId, post)
        console.log('Updated')
    } catch (e) {
        console.log(e)
        e.message = 'Error updating post'
        next(e)    
    }
}

async function deletePost(postId, next) {
    try {
        await Post.findByIdAndDelete(postId)
        console.log('Deleted')
    } catch (e) {
        console.log(e)
        e.message = 'Error deleting post'
        next(e)    
    }
}

async function postExists(postID, next) {
    try {
        return await Post.findById(postID)
    } catch (e) {
        console.log(e)
        e.message = 'Error fetching post from the database'
        next(e)    
    }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    postExists
}