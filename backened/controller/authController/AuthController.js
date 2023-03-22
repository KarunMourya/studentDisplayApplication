import loginService from "../../services/authService/loginService.js";
import signUpService from "../../services/authService/signUpService.js";

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(402).send({
        data: [],
        error: true,
        message: "All fields Required",
      });
    }
    const { data, message, error } = await loginService(request);
    console.log("data: ", data);

    if (!error) {
      return response.status(200).send({
        token: data,
        error: false,
        message: "SUCCESSFULLY LOGIN",
      });
    }
    return response.status(400).send({
      token: data,
      error: true,
      message: message,
    });
  } catch (error) {
    return response.status(500).send({
      data: [],
      error: true,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
export const signUpController = async (request, response) => {
  try {
    const { email, password, username, firstname, lastname, address } =
      request.body;
    if (
      !email ||
      !password ||
      !username ||
      !firstname ||
      !lastname ||
      !address
    ) {
      return response.status(402).send({
        data: [],
        error: true,
        message: "All fields Required",
      });
    }
    const { data, message, error } = await signUpService(request);
    if (!error) {
      return response.status(200).send({
        data: data,
        error: false,
        message: "SUCCESSFULLY REGISTER",
      });
    }
    return response.status(402).send({
      data: data,
      error: true,
      message: message,
    });
  } catch (error) {
    return response.status(500).send({
      data: [],
      error: true,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
