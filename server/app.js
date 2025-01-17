import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import router from "./src/routes/api.js";

import {
  DATABASE,
  MAX_JSON_SIZE,
  PORT,
  REQUEST_NUMBER,
  REQUEST_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from "./src/config/config.js";

const app = express();

// App Use Default Middleware
app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      "https://refresh-modules-mern-7-client.vercel.app",
      "https://refresh-modules-mern-7.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Access-Control-Allow-Origin",
    ],
    exposedHeaders: ["ETag"],
  })
);

// app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.json());
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cookieParser());

// App Use Limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

// Cache
app.set("etag", WEB_CACHE);

// Database Connect
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", router);

app.use("/upload-file", express.static("uploads"));

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
