import prisma from "../../../shared/prisma";
import { hashedPassword } from "./user.utils";

const getAllUser = async () => {
  return;
};
const getMyProfile = async (userId: string) => {
  console.log(userId);
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const createUser = async (userData: any) => {
  const hashPassword = await hashedPassword(userData.password);
  console.log(hashPassword);
  userData.password = hashPassword;

  const result = await prisma.user.create({
    data: userData,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  console.log(result);
  return result;
};
const changeProfileStatus = async (payload: any) => {
  console.log(payload);
  return null;
};
const updateMyProfile = async (payload: any) => {
  console.log(payload);
  return null;
};

export const UserServices = {
  getAllUser,
  getMyProfile,
  createUser,
  changeProfileStatus,
  updateMyProfile,
};
