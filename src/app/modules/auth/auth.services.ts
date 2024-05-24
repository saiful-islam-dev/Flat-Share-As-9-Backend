const loginUser = async (payload: any) => {
  console.log(payload);
  return null;
};

const refreshToken = async (payload: any) => {
  console.log(payload);
};

const changePassword = async (payload: any) => {
  console.log(payload);
};

export const AuthServices = {
  loginUser,
  refreshToken,
  changePassword,
};
