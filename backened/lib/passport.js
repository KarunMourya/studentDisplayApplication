import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import User from "../models/userModel.js"

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "12345",
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await User.findOne(
        {
          where: { email:payload.email },
        },
        { raw: true }
      );
      if (!user) {
        return done(null, false, { message: "Unauthorized user" });
      }
      if (payload.exp <= Date.now() / 1000) {
        return done(error, false, { message: "Token has expired" });
      }
      return done(null, user);
    } catch (error) {
      done(error, false, {
        message: "Something went wrong",
      });
    }
  })
);

export default passport;