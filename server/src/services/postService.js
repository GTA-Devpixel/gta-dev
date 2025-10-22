import { query } from "../utils/db.js";

// Get all posts (optionally by group or author)
export const getAllPosts = async (filters = {}) => {
  const { group_id, author_id } = filters;
  let sql = `
    SELECT p.*, u.name AS author_name, g.name AS group_name
    FROM posts p
    LEFT JOIN users u ON p.author_id = u.id
    LEFT JOIN \`groups\` g ON p.group_id = g.id
    WHERE 1=1
  `;
  const params = [];

  if (group_id) {
    sql += " AND p.group_id = ?";
    params.push(group_id);
  }
  if (author_id) {
    sql += " AND p.author_id = ?";
    params.push(author_id);
  }

  sql += " ORDER BY p.created_at DESC";
  return await query(sql, params);
};

export const getPostById = async (id) => {
  const rows = await query("SELECT * FROM posts WHERE id = ?", [id]);
  return rows[0];
};

export const createPost = async (data) => {
  const { id, group_id, author_id, title, body, visibility, pinned, status } = data;
  await query(
    `INSERT INTO posts (id, group_id, author_id, title, body, visibility, pinned, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [id, group_id, author_id, title, body, visibility, pinned, status]
  );
  return { message: "Post created successfully" };
};

export const updatePost = async (id, data) => {
  const { title, body, visibility, pinned, status } = data;
  await query(
    "UPDATE posts SET title=?, body=?, visibility=?, pinned=?, status=? WHERE id=?",
    [title, body, visibility, pinned, status, id]
  );
  return { message: "Post updated" };
};

export const deletePost = async (id) => {
  await query("DELETE FROM posts WHERE id=?", [id]);
  return { message: "Post deleted" };
};

// Likes
export const likePost = async (postId, userId) => {
  await query("INSERT IGNORE INTO post_likes (post_id, user_id) VALUES (?, ?)", [
    postId,
    userId,
  ]);
  return { message: "Post liked" };
};

export const unlikePost = async (postId, userId) => {
  await query("DELETE FROM post_likes WHERE post_id=? AND user_id=?", [postId, userId]);
  return { message: "Post unliked" };
};

// Comments
export const getComments = async (postId) => {
  return await query(
    `SELECT c.*, u.name AS author_name, u.avatar_url
     FROM comments c
     JOIN users u ON c.author_id = u.id
     WHERE c.post_id = ?
     ORDER BY c.created_at DESC`,
    [postId]
  );
};

export const addComment = async (postId, authorId, body) => {
  const id = crypto.randomUUID();
  await query(
    "INSERT INTO comments (id, post_id, author_id, body) VALUES (?, ?, ?, ?)",
    [id, postId, authorId, body]
  );
  return { message: "Comment added" };
};
