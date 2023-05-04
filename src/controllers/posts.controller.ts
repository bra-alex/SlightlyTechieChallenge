import { Request, Response } from 'express'

import { Post } from '../models/userInput'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../services/post.service'
import {
  CreatePostInput,
  DeletePostInput,
  GetPostInput,
  UpdatePostInput,
} from '../schema/posts.schema'

async function httpGetPosts(_req: Request, res: Response) {
  try {
    const posts = await getPosts()

    return res.status(200).json(posts)
  } catch (e: any) {
    console.error(e)
    return res.sendStatus(400)
  }
}

async function httpGetPost(req: Request<GetPostInput['params']>, res: Response) {
  try {
    const postId = req.params.postId
    const post = await getPost({ _id: postId })

    if (!post)
      return res.status(404).json({
        message: 'Post not found',
      })

    return res.status(200).json(post)
  } catch (e: any) {
    console.error(e)

    return res.sendStatus(400)
  }
}

async function httpCreatePost(
  req: Request<Record<never, never>, Record<never, never>, CreatePostInput['body']>,
  res: Response,
) {
  try {
    const postDetails = req.body as Post
    const post = await createPost(postDetails)

    return res.status(201).json(post)
  } catch (e: any) {
    console.error(e)

    return res.sendStatus(400)
  }
}

async function httpUpdatePost(
  req: Request<UpdatePostInput['params'], Record<never, never>, UpdatePostInput['body']>,
  res: Response,
) {
  try {
    const postId = req.params.postId
    const postUpdate = req.body as Post
    const post = await updatePost({ _id: postId }, postUpdate, { new: true })

    return res.status(200).json(post)
  } catch (e: any) {
    console.error(e)
    return res.sendStatus(400)
  }
}

async function httpDeletePost(req: Request<DeletePostInput['params']>, res: Response) {
  try {
    const postId = req.params.postId

    await deletePost({ _id: postId })

    return res.status(204)
  } catch (e: any) {
    console.error(e)

    return res.sendStatus(400)
  }
}

export { httpGetPosts, httpGetPost, httpCreatePost, httpUpdatePost, httpDeletePost }
