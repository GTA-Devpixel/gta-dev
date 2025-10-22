import { query } from "../utils/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "devsecretkey";

// Signup
export const registerUser = async (data) => {
  const { id, email, password_hash } = data;

  // hash password
  const hashed = await bcrypt.hash(password_hash, 10);

  await query(
    "INSERT INTO users (id, email, password_hash, status) VALUES (?, ?, ?, 'active')",
    [id, email, hashed]
  );

  return { message: "User registered successfully" };
};

// Login
export const loginUser = async (email, password) => {
  const rows = await query("SELECT * FROM users WHERE email=?", [email]);
  const user = rows[0];
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  return { token, user };
};
