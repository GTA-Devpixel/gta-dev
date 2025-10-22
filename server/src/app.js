import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

// Routes
import authRoutes from "./routes/authRoutes.js";
import groupRoutes from "./routes/groupRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";

// Middlewares
import { authenticate } from "./middlewares/authMiddleware.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

// ========== GLOBAL MIDDLEWARES ==========
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ========== BASE ROUTE ==========
app.get("/", (req, res) => {
  res.json({
    message: "🌍 GTA API is running successfully!",
    endpoints: {
      auth: "/api/auth",
      groups: "/api/groups",
      posts: "/api/posts",
      events: "/api/events",
      campaigns: "/api/campaigns",
    },
  });
});

// ========== ROUTES ==========
app.use("/api/auth", authRoutes);

// Protected routes (require token)
app.use("/api/groups", authenticate, groupRoutes);
app.use("/api/posts", authenticate, postRoutes);
app.use("/api/events", authenticate, eventRoutes);
app.use("/api/campaigns", authenticate, campaignRoutes);

// ========== ERROR HANDLER ==========
app.use(errorHandler);

export default app;
