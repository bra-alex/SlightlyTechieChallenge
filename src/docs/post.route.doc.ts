// Get Posts
/**
 * @openapi
 * '/posts':
 *  get:
 *     tags:
 *     - Post
 *     summary: Get all posts
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */

// Get Post
/**
 * @openapi
 * '/posts/{postId}':
 *  get:
 *     tags:
 *     - Post
 *     summary: Get a single post by the postId
 *     parameters:
 *     - name: postId
 *       in: path
 *       description: The id of the post
 *       required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 *       400:
 *         description: Bad Request
 */

// Create Post
/**
 * @openapi
 * '/posts':
 *  post:
 *     tags:
 *     - Post
 *     summary: Add post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePostInput'
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePostOutput'
 *       400:
 *         description: Bad Request
 */

// Update Post
/**
 * @openapi
 * '/posts/{postId}':
 *  put:
 *     tags:
 *     - Post
 *     summary: Update post
 *     parameters:
 *     - name: postId
 *       in: path
 *       description: The id of the post
 *       required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePostInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreatePostOutput'
 *       400:
 *         description: Bad Request
 */

// Delete Post
/**
 * @openapi
 * '/posts/{postId}':
 *  delete:
 *     tags:
 *     - Post
 *     summary: Delete post
 *     parameters:
 *     - name: postId
 *       in: path
 *       description: The id of the post
 *       required: true
 *     responses:
 *       204:
 *         description: Success
 *       400:
 *         description: Bad Request
 */
