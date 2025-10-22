import { query } from "../utils/db.js";

export const getAllUsers = async () => {
  return await query("SELECT * FROM users");
};

export const getUserById = async (id) => {
  const rows = await query("SELECT * FROM users WHERE id = ?", [id]);
  return rows[0];
};

export const createUser = async (data) => {
  const { id, email, phone, password_hash, auth_provider, status } = data;
  await query(
    "INSERT INTO users (id, email, phone, password_hash, auth_provider, status) VALUES (?, ?, ?, ?, ?, ?)",
    [id, email, phone, password_hash, auth_provider, status]
  );
  return { message: "User created successfully" };
};

export const updateUser = async (id, data) => {
  const { email, phone, status } = data;
  await query("UPDATE users SET email=?, phone=?, status=? WHERE id=?", [
    email,
    phone,
    status,
    id,
  ]);
  return { message: "User updated" };
};

export const deleteUser = async (id) => {
  await query("DELETE FROM users WHERE id=?", [id]);
  return { message: "User deleted" };
};
