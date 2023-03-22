import axios from "axios";

const userGetService = async (request) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (data) {
      return {
        data,
        message: "Successfully fetch data",
      };
    }
    return {
      data,
      message: "Successfully fetch data but not entries",
    };
  } catch (error) {
    return {
      data: [],
      error: true,
      message: "Resource Not Found",
    };
  }
};
export default userGetService;
