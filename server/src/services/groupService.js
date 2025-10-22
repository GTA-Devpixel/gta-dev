import { query } from "../utils/db.js";

// ========================
// GROUPS CRUD
// ========================

// Get all groups (optionally filter by city/category)
export const getAllGroups = async (filters = {}) => {
  const { city, category } = filters;
  let sql = "SELECT * FROM `groups` WHERE 1=1";
  const params = [];

  if (city) {
    sql += " AND city = ?";
    params.push(city);
  }
  if (category) {
    sql += " AND category = ?";
    params.push(category);
  }

  return await query(sql, params);
};

// Get single group by ID
export const getGroupById = async (id) => {
  const rows = await query("SELECT * FROM `groups` WHERE id = ?", [id]);
  return rows[0];
};

// Create new group
export const createGroup = async (data) => {
  const {
    id,
    name,
    slug,
    description,
    visibility,
    cover_url,
    city,
    category,
    created_by,
  } = data;

  await query(
    "INSERT INTO `groups` (id, name, slug, description, visibility, cover_url, city, category, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [id, name, slug, description, visibility, cover_url, city, category, created_by]
  );
  return { message: "Group created successfully" };
};

// Update existing group
export const updateGroup = async (id, data) => {
  const { name, description, visibility, cover_url, city, category } = data;
  await query(
    "UPDATE `groups` SET name=?, description=?, visibility=?, cover_url=?, city=?, category=? WHERE id=?",
    [name, description, visibility, cover_url, city, category, id]
  );
  return { message: "Group updated successfully" };
};

// Delete group
export const deleteGroup = async (id) => {
  await query("DELETE FROM `groups` WHERE id=?", [id]);
  return { message: "Group deleted successfully" };
};

// ========================
// MEMBERSHIPS
// ========================

// Get members of a group
export const getGroupMembers = async (groupId) => {
  return await query(
    `SELECT gm.user_id, gm.role, gm.status, u.email
     FROM group_memberships gm
     JOIN users u ON u.id = gm.user_id
     WHERE gm.group_id = ?`,
    [groupId]
  );
};

// Add a member
export const addGroupMember = async (groupId, userId, role = "member") => {
  await query(
    "INSERT INTO group_memberships (group_id, user_id, role) VALUES (?, ?, ?)",
    [groupId, userId, role]
  );
  return { message: "Member added successfully" };
};

// Remove a member
export const removeGroupMember = async (groupId, userId) => {
  await query("DELETE FROM group_memberships WHERE group_id=? AND user_id=?", [
    groupId,
    userId,
  ]);
  return { message: "Member removed successfully" };
};

// ========================
// JOIN REQUESTS
// ========================

// Create join request
export const createJoinRequest = async (groupId, userId, message) => {
  await query(
    "INSERT INTO group_join_requests (group_id, user_id, message) VALUES (?, ?, ?)",
    [groupId, userId, message]
  );
  return { message: "Join request submitted" };
};

// Approve or reject request
export const updateJoinRequest = async (id, status, decidedBy) => {
  await query(
    "UPDATE group_join_requests SET status=?, decided_by=?, decided_at=NOW() WHERE id=?",
    [status, decidedBy, id]
  );
  return { message: `Join request ${status}` };
};
