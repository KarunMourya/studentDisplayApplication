import axios from "axios";

export const signUpUser = async (user) => {
  const response = await axios.post(
    "https://dashboard-tdoy.onrender.com/api/v1/signup",
    user
  );
  return response;
};
