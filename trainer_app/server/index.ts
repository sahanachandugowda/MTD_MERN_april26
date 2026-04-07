import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.TRAINER_APP_PORT || 5000;
const MONGO_URI = process.env.TRAINER_MONGO_URI || "";

app.get("/", (req, res) => {
  res.send("server is running");
});

async function startServer() {
  try {
    await mongoose.connect(MONGO_URI); // no extra options needed in Mongoose v6+
    console.log("✅ Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

startServer();
