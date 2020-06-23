import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

// const handleHome = (req, res) => res.send("Hello from home");

// const handleProfile = (req, res) => res.send("You are on my profile");

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

// app.get("/", handleHome);

// app.get("/profile", handleProfile);

app.use(localMiddleware);

// app.use("/", globalRouter);
app.use(routes.home, globalRouter);
// app.use("/user", userRouter);
app.use(routes.users, userRouter);
// app.use("/video", videoRouter);
app.use(routes.videos, videoRouter);

export default app;
