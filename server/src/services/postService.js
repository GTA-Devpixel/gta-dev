// src/services/postService.js
// Using mock data instead of DB for testing and frontend integration

// ----------------------
// MOCK DATA
// ----------------------

const mockPosts = [
  {
    id: "p1111111-1111-1111-1111-111111111111",
    group_id: "aaaa1111-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
    group_name: "Hyderabad Runners",
    author_id: "11111111-1111-1111-1111-111111111111",
    author_name: "Sai Kumar",
    title: "Sunday Long Run",
    body: "Join us at KBR Park at 6AM for a long run!",
    visibility: "group",
    pinned: false,
    status: "active",
    created_at: "2025-10-20T06:00:00",
  },
  {
    id: "p2222222-2222-2222-2222-222222222222",
    group_id: "bbbb2222-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
    group_name: "Warangal Arts",
    author_id: "33333333-3333-3333-3333-333333333333",
    author_name: "Arjun M",
    title: "Art Workshop",
    body: "We’re hosting a watercolor basics workshop this weekend!",
    visibility: "public",
    pinned: true,
    status: "active",
    created_at: "2025-10-18T10:00:00",
  },
  {
    id: "p3333333-3333-3333-3333-333333333333",
    group_id: "cccc3333-cccc-cccc-cccc-cccccccccccc",
    group_name: "Nizamabad Volunteers",
    author_id: "44444444-4444-4444-4444-444444444444",
    author_name: "Keerthi S",
    title: "Clean-up Drive",
    body: "Private volunteers meet this Saturday.",
    visibility: "group",
    pinned: false,
    status: "active",
    created_at: "2025-10-17T08:30:00",
  },
  {
    id: "p4444444-4444-4444-4444-444444444444",
    group_id: "dddd4444-dddd-dddd-dddd-dddddddddddd",
    group_name: "Khammam Tech Circle",
    author_id: "55555555-5555-5555-5555-555555555555",
    author_name: "Rahul T",
    title: "React Native Talk",
    body: "Let’s discuss state management patterns in RN apps.",
    visibility: "public",
    pinned: false,
    status: "active",
    created_at: "2025-10-16T09:00:00",
  },
  {
    id: "p5555555-5555-5555-5555-555555555555",
    group_id: "eeee5555-eeee-eeee-eeee-eeeeeeeeeeee",
    group_name: "Karimnagar Food Drive",
    author_id: "22222222-2222-2222-2222-222222222222",
    author_name: "Priya R",
    title: "Food Drive Report",
    body: "We successfully distributed 500 meals this weekend!",
    visibility: "public",
    pinned: true,
    status: "active",
    created_at: "2025-10-15T12:00:00",
  },
];

const mockLikes = [
  { post_id: "p1111111-1111-1111-1111-111111111111", user_id: "22222222-2222-2222-2222-222222222222" },
  { post_id: "p1111111-1111-1111-1111-111111111111", user_id: "33333333-3333-3333-3333-333333333333" },
  { post_id: "p2222222-2222-2222-2222-222222222222", user_id: "11111111-1111-1111-1111-111111111111" },
  { post_id: "p2222222-2222-2222-2222-222222222222", user_id: "44444444-4444-4444-4444-444444444444" },
];

const mockComments = [
  {
    id: "c1111111-1111-1111-1111-111111111111",
    post_id: "p1111111-1111-1111-1111-111111111111",
    author_id: "22222222-2222-2222-2222-222222222222",
    author_name: "Priya R",
    avatar_url: "https://picsum.photos/seed/priya/200",
    body: "See you at 6!",
    created_at: "2025-10-19T06:10:00",
  },
  {
    id: "c2222222-2222-2222-2222-222222222222",
    post_id: "p2222222-2222-2222-2222-222222222222",
    author_id: "11111111-1111-1111-1111-111111111111",
    author_name: "Sai Kumar",
    avatar_url: "https://picsum.photos/seed/sai/200",
    body: "Love watercolors 🎨",
    created_at: "2025-10-18T10:30:00",
  },
  {
    id: "c3333333-3333-3333-3333-333333333333",
    post_id: "p3333333-3333-3333-3333-333333333333",
    author_id: "44444444-4444-4444-4444-444444444444",
    author_name: "Keerthi S",
    avatar_url: "https://picsum.photos/seed/keerthi/200",
    body: "Bring gloves!",
    created_at: "2025-10-17T09:00:00",
  },
];

// ----------------------
// SERVICE FUNCTIONS
// ----------------------

// Get all posts
export const getAllPosts = async (filters = {}) => {
  const { group_id, author_id } = filters;
  let posts = [...mockPosts];

  if (group_id) posts = posts.filter((p) => p.group_id === group_id);
  if (author_id) posts = posts.filter((p) => p.author_id === author_id);

  return posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
};

// Get single post
export const getPostById = async (id) => {
  return mockPosts.find((p) => p.id === id);
};

// Create post
export const createPost = async (data) => {
  mockPosts.push({
    ...data,
    created_at: new Date().toISOString(),
  });
  return { message: "Post created successfully (mock)", post: data };
};

// Update post
export const updatePost = async (id, data) => {
  const index = mockPosts.findIndex((p) => p.id === id);
  if (index === -1) return { message: "Post not found" };
  mockPosts[index] = { ...mockPosts[index], ...data };
  return { message: "Post updated successfully (mock)", post: mockPosts[index] };
};

// Delete post
export const deletePost = async (id) => {
  const index = mockPosts.findIndex((p) => p.id === id);
  if (index === -1) return { message: "Post not found" };
  mockPosts.splice(index, 1);
  return { message: "Post deleted successfully (mock)" };
};

// Likes
export const likePost = async (postId, userId) => {
  if (!mockLikes.some((l) => l.post_id === postId && l.user_id === userId)) {
    mockLikes.push({ post_id: postId, user_id: userId });
  }
  return { message: "Post liked (mock)" };
};

export const unlikePost = async (postId, userId) => {
  const index = mockLikes.findIndex((l) => l.post_id === postId && l.user_id === userId);
  if (index !== -1) mockLikes.splice(index, 1);
  return { message: "Post unliked (mock)" };
};

// Comments
export const getComments = async (postId) => {
  return mockComments.filter((c) => c.post_id === postId);
};

export const addComment = async (postId, authorId, body) => {
  const newComment = {
    id: `c${Date.now()}`,
    post_id: postId,
    author_id: authorId,
    author_name: "Static User",
    avatar_url: "https://picsum.photos/seed/static/200",
    body,
    created_at: new Date().toISOString(),
  };
  mockComments.push(newComment);
  return { message: "Comment added (mock)", comment: newComment };
};
