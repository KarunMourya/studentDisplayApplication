import axios from "axios";
import authHeader from "./auth-header";

export const fetchData = async (token) => {
  const response = await axios.get("https://dashboard-tdoy.onrender.com/api/v1/", {
    headers: authHeader(),
  });
  return response;
};
