const Post = require('../models/posts.mongo')

async function getPosts() {
    try {
        return await Post.find({},
            {
                '_id': 0,
                '__v': 0
            })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error fetching posts from the database'
        })
    }
}

async function getPost(postID) {
    try {
        return await Post.findById(postID,
            {
                '_id': 0,
                '__v': 0
            })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error fetching post from the database'
        })
    }
}

async function createPost(post) {
    try {
        const newPost = new Post(post)
        await newPost.save()
        console.log('Saved')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error creating post'
        })
    }
}

async function updatePost(postId, post) {
    try {
        await Post.findByIdAndUpdate(postId, post)
        console.log('Updated')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error updating post'
        })
    }
}

async function deletePost(postId) {
    try {
        await Post.findByIdAndDelete(postId)
        console.log('Deleted')
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error deleting post'
        })
    }
}

async function postExists(postID) {
    try {
        return await Post.findById(postID)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error fetching post from the database'
        })
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