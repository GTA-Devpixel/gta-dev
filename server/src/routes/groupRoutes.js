import express from "express";
import {
  getGroups,
  getGroup,
  createGroup,
  updateGroup,
  deleteGroup,
  getMembers,
  addMember,
  removeMember,
  createJoinRequest,
  updateJoinRequest,
} from "../controllers/groupController.js";

const router = express.Router();

// ========== Group CRUD ==========
router.get("/", getGroups);
router.get("/:id", getGroup);
router.post("/", createGroup);
router.put("/:id", updateGroup);
router.delete("/:id", deleteGroup);

// ========== Members ==========
router.get("/:groupId/members", getMembers);
router.post("/:groupId/members", addMember);
router.delete("/:groupId/members/:userId", removeMember);

// ========== Join Requests ==========
router.post("/join-requests", createJoinRequest);
router.put("/join-requests/:id", updateJoinRequest);

export default router;
