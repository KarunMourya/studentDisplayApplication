import axios from "axios";
import authHeader from "./auth-header";

export const fetchData = async (token) => {
  const response = await axios.get("http://localhost:8000/api/v1/", {
    headers: authHeader(),
  });
  return response;
};
