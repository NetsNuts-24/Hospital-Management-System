import prisma from '../prisma/prismaClient.js';

// Get all users
export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Create a new user
export const createUser = async (data) => {
  return await prisma.user.create({ data });
};

// Get a user by ID
export const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id: id } });
};

// Update a user
export const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id: id }, data });
};

// Delete a user
export const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: id } });
};
