import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary"
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";


dotenv.config();
cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
})
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()) //middleware to parse req.body
app.use(express.urlencoded({extended:true}))  // to pass form data(urlencoded)
app.use(cookieParser())  //get the cookies
app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  connectMongoDB();
});
