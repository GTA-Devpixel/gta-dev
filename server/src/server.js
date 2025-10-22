import app from "./app.js";
import { pool } from "./config/databaseConfig.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ DB Connected successfully!");
    conn.release();

    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ DB Connection failed:", err);
    process.exit(1);
  }
})();
