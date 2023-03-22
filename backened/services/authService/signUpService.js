import { getHashedPassword } from "../../lib/passwordHelper.js";
import User from "../../models/userModel.js";

const signUpService = async (request) => {
  try {
    const { email, password, username, firstname, lastname, address } =
      request.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return { data: [], message: "User already exists", error: true };
    }
    const hash = await getHashedPassword(password);
    const user = await User.create(
      {
        email,
        password: hash,
        userName: username,
        firstName: firstname,
        lastName: lastname,
        address,
      },
      { raw: true }
    );
    if (!user) {
      return {
        data: [],
        error: true,
        message: "failure",
      };
    } else {
      return { data: user, error: false, message: "success" };
    }
  } catch (error) {
    return {
      data: [],
      error: true,
      message: "Resource Not Found",
    };
  }
};
export default signUpService;
