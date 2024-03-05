import mongoose from "mongoose";
import app from "./app.js";

const { PORT, DB_HOST } = process.env;

mongoose.connect(DB_HOST).then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log("Server is running");
  });
});
