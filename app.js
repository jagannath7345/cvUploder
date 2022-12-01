import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import userRouts from "./routes/userRoutes.js";
// import upload from "./middlewares/uploadfiles.js";
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());

connectDB(DATABASE_URL);
app.use(express.json());

// app.use(
//   upload.fields([
//     { name: "pimage", maxCount: 1 },
//     { name: "rdoc", maxCount: 1 },
//   ])
// );

app.use("/api", userRouts);

app.listen(port, () => {
  console.log(`Server listing at http://127.0.0.1:${port}`);
});
