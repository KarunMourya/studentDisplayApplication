import axios from "axios";

export const signUpUser = async (user) => {
  const response = await axios.post(
    "http://localhost:8000/api/v1/signup",
    user
  );
  return response;
};
