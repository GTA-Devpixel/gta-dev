import * as groupService from "../services/groupService.js";

// ========== GROUP CRUD ==========
export const getGroups = async (req, res) => {
  const groups = await groupService.getAllGroups(req.query);
  res.json(groups);
};

export const getGroup = async (req, res) => {
  const group = await groupService.getGroupById(req.params.id);
  group ? res.json(group) : res.status(404).json({ message: "Group not found" });
};

export const createGroup = async (req, res) => {
  const result = await groupService.createGroup(req.body);
  res.status(201).json(result);
};

export const updateGroup = async (req, res) => {
  const result = await groupService.updateGroup(req.params.id, req.body);
  res.json(result);
};

export const deleteGroup = async (req, res) => {
  const result = await groupService.deleteGroup(req.params.id);
  res.json(result);
};

// ========== MEMBERSHIPS ==========
export const getMembers = async (req, res) => {
  const members = await groupService.getGroupMembers(req.params.groupId);
  res.json(members);
};

export const addMember = async (req, res) => {
  const result = await groupService.addGroupMember(
    req.params.groupId,
    req.body.userId,
    req.body.role
  );
  res.status(201).json(result);
};

export const removeMember = async (req, res) => {
  const result = await groupService.removeGroupMember(
    req.params.groupId,
    req.params.userId
  );
  res.json(result);
};

// ========== JOIN REQUESTS ==========
export const createJoinRequest = async (req, res) => {
  const result = await groupService.createJoinRequest(
    req.body.groupId,
    req.body.userId,
    req.body.message
  );
  res.status(201).json(result);
};

export const updateJoinRequest = async (req, res) => {
  const result = await groupService.updateJoinRequest(
    req.params.id,
    req.body.status,
    req.body.decidedBy
  );
  res.json(result);
};
