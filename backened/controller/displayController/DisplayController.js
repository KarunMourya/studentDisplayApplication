import userGetService from "../../services/displayService/userGetService.js";

export const displayController = async (request, response) => {
  try {
    const { data, message } = await userGetService(request);
    if (data) {
      return response.status(200).send({
        data: data,
        error: false,
        message: message,
      });
    }
    return response.status(400).send({
      data: [],
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
