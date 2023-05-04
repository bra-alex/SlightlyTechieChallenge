import { object, string, TypeOf } from 'zod'

const postSchema = {
  body: object({
    title: string({
      required_error: 'Title is required',
    }),
    content: string({
      required_error: 'Content is required',
    }),
    author: string({
      required_error: 'Author is required',
    }),
  }),
}

const params = {
  params: object({
    postId: string({
      required_error: 'Post Id is required',
    }),
  }),
}

const getPostSchema = object({
  ...params,
})

const createPostSchema = object({
  ...postSchema,
})

const updatePostSchema = object({
  ...params,
  ...postSchema,
})

const deletePostSchema = object({
  ...params,
})

type GetPostInput = TypeOf<typeof getPostSchema>
type CreatePostInput = TypeOf<typeof createPostSchema>
type UpdatePostInput = TypeOf<typeof updatePostSchema>
type DeletePostInput = TypeOf<typeof deletePostSchema>

export {
  getPostSchema,
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  GetPostInput,
  CreatePostInput,
  UpdatePostInput,
  DeletePostInput,
}
