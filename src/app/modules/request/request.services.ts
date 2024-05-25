import prisma from "../../../shared/prisma";

const createRequestInToDB = async (data: any, userId: string) => {
  return await prisma.request.create({
    data: {
      ...data,
      userId,
    },
  });
};

const getRequestsForFlat = async () => {
  return await prisma.request.findMany();
};

const getUserRequests = async (userId: string) => {
  return await prisma.request.findMany({
    where: { userId },
  });
};

const updateRequestStatus = async (
  id: string,
  payload: { status: "PENDING" | "APPROVED" | "REJECTED" }
) => {
  const result = await prisma.request.update({
    where: { id },
    data: { status: payload.status },
  });
  return result;
};

const deleteRequest = async (id: string) => {
  return await prisma.request.delete({ where: { id } });
};

export const requestServices = {
  createRequestInToDB,
  getRequestsForFlat,
  getUserRequests,
  updateRequestStatus,
  deleteRequest,
};
