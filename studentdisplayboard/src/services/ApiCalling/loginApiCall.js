import axios from "axios";

export const fetchToken = async (user) => {
  const response = await axios.post("https://dashboard-tdoy.onrender.com/api/v1/login", user);
  if(response.data.token){
    localStorage.setItem('token',response.data.token);
  }
  return response;
};
