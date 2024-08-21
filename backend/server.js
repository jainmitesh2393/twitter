import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()) //middleware to parse req.body
app.use(express.urlencoded({extended:true}))  // to pass form data(urlencoded)
app.use(cookieParser())  //get the cookies
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  connectMongoDB();
});
