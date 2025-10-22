import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
  getComments,
  addComment,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

router.post("/:id/like", likePost);
router.post("/:id/unlike", unlikePost);

router.get("/:id/comments", getComments);
router.post("/:id/comments", addComment);

export default router;
