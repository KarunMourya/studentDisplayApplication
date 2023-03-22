import bcrypt from "bcrypt";
import User from "../../models/userModel.js";
import jwt from "jsonwebtoken";

const loginService = async (request) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) {
      return { data: [], message: "User not exist", error: true };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { data: [], message: "Incorrect password", error: true };
    }
    const payload = {
      id: user.id,
      email,
    };
    const token = await jwt.sign(payload, "12345");
    return {
      data: token,
      error: false,
      message: "success",
    };
  } catch (error) {
    return {
      data: [],
      error: true,
      message: "Resource Not Found",
    };
  }
};
export default loginService;
