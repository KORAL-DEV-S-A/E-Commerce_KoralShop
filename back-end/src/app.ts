import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/", (req, res) => {
  res.json({
    success: true,
    message: "API running correctly",
  });
});

app.use("/api", routes);

export default app;
