import { getAllUsers as _getAllUsers, createUser as _createUser, getUserById as _getUserById, updateUser as _updateUser, deleteUser as _deleteUser } from '../services/userService.js';

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await _getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  try {
    const user = await _createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create user' });
  }
};

// Get a user by ID
export const getUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = await _getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Update a user
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await _updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update user' });
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    await _deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete user' });
  }
};
