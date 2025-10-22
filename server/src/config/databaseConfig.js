// src/config/databaseConfig.js
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env (from root)
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// --- Read DB credentials ---
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_CONN_LIMIT
} = process.env;

// --- Create MySQL Connection Pool ---
export const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT || 3306,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  waitForConnections: true,
  connectionLimit: Number(DB_CONN_LIMIT || 10),
  queueLimit: 0,
});

// Optional: config object if you ever need it elsewhere
export const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

// Helper for manual testing
export function call() {
  console.log("DB Config:", dbConfig);
  console.log("cwd:", process.cwd());
}

export default pool;
