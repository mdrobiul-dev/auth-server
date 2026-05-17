import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "./config/index.js";
import errorMiddlewares from "./middleware/error.middleware.js";

const app = express();

// middlewares

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// health check

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    environment: config.env,
    uptime: process.uptime(),
  });
});


app.use(errorMiddlewares)

export default app;
