import * as userService from "../services/userServices";

export const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "Not found" });
};

export const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  res.status(201).json(result);
};

export const updateUser = async (req, res) => {
  const result = await userService.updateUser(req.params.id, req.body);
  res.json(result);
};

export const deleteUser = async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  res.json(result);
};
