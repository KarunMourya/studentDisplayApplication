import axios from "axios";

export const fetchToken = async (user) => {
  const response = await axios.post("http://localhost:8000/api/v1/login", user);
  if(response.data.token){
    localStorage.setItem('token',response.data.token);
  }
  return response;
};
