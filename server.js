import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/connectDb.js";
import userRouter from "./routes/userRoute.js";
import transectionRouter from "./routes/transectionRoute.js";

//config:
connectDB();
//rest object:
const app = express();

//middlewears:
dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes:
//user route:
app.use("/api/v1/user", userRouter);
//transection route:
app.use("/api/v1/transection", transectionRouter);

app.use("/", (req, res) => {
  res.send("Hello From Server");
});

//port:
const PORT = process.env.PORT;
const hostName = "127.0.0.1";

//app listening:
app.listen(PORT, () => {
  console.log(`Server is running at http://${hostName}:${PORT}`.bgGreen.yellow);
});
