import passport from "../lib/passport.js";

const authenticationMiddleware = async (request, response, next) => {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      return response.status(402).send({
        data: [],
        error: true,
        message: "token is not found",
      });
    }
    const [type, token] = authHeader.split(" ");
    if (type !== "Bearer") {
      return response.status(402).send({
        data: [],
        error: true,
        message: "Corrupt Header",
      });
    }
    await passport.authenticate(
      "jwt",
      { session: false, failWithError: true },
      (error, user, info) => {
        if (user) {
          request.user = user;
          next();
        }
        if (error) {
          return response.status(400).send({
            data: [],
            error: true,
            message: info.message,
          });
        }
        if (!user) {
          return response.status(400).send({
            data: [],
            error: true,
            message: info.message,
          });
        }
      }
    )(request, response, next);
  } catch (error) {
    return response.status(500).send({
      data: [],
      error: true,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

export default authenticationMiddleware;
