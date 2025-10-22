import * as postService from "../services/postService.js";

export const getPosts = async (req, res) => {
  const posts = await postService.getAllPosts(req.query);
  res.json(posts);
};

export const getPost = async (req, res) => {
  const post = await postService.getPostById(req.params.id);
  post ? res.json(post) : res.status(404).json({ message: "Post not found" });
};

export const createPost = async (req, res) => {
  const result = await postService.createPost(req.body);
  res.status(201).json(result);
};

export const updatePost = async (req, res) => {
  const result = await postService.updatePost(req.params.id, req.body);
  res.json(result);
};

export const deletePost = async (req, res) => {
  const result = await postService.deletePost(req.params.id);
  res.json(result);
};

// Likes
export const likePost = async (req, res) => {
  const result = await postService.likePost(req.params.id, req.body.user_id);
  res.json(result);
};

export const unlikePost = async (req, res) => {
  const result = await postService.unlikePost(req.params.id, req.body.user_id);
  res.json(result);
};

// Comments
export const getComments = async (req, res) => {
  const comments = await postService.getComments(req.params.id);
  res.json(comments);
};

export const addComment = async (req, res) => {
  const result = await postService.addComment(
    req.params.id,
    req.body.author_id,
    req.body.body
  );
  res.status(201).json(result);
};
