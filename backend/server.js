import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import exerciseRouter from "./routes/exerciseRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/react-hh-exercise",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use("/user", userRouter);
app.use("/exercise", exerciseRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
