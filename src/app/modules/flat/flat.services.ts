import prisma from "../../../shared/prisma";

const createFlatInToDB = async (userId: string, data: any) => {
  data.postedById = userId;

  console.log(data);
  const result = await prisma.flat.create({
    data,
  });

  return result;
};

const getFlats = async (payload: any) => {
  return await prisma.flat.findMany();
};
const getFlatById = async (id: string) => {
  const result = await prisma.flat.findUnique({
    where: { id },
  });
  return result;
};

const updateFlat = async (id: string, data: any) => {
  console.log({ id, data });
  const result = await prisma.flat.update({
    where: { id },
    data,
  });

  return result;
};

const deleteFlat = async (id: string) => {
  return await prisma.flat.delete({ where: { id } });
};

export const FlatServices = {
  createFlatInToDB,
  getFlats,
  getFlatById,
  updateFlat,
  deleteFlat,
};
