import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/route.js";
import passport from "passport";

const app = express();

app.use(express.json())
app.use(cors());
app.use(passport.initialize());
app.use('/api/v1/',router);

dotenv.config();

const PORT = process.env.PORT||9000;

app.listen(PORT,()=>{
  console.log(`server is running on ${PORT}`);
})