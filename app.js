import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import csp from "helmet-csp";

import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import routes from "./routers/routes";
import { localsMiddleware } from "./middleware";

const app = express();
const { home, users, videos } = routes;

app.use(helmet());
app.use(
  csp({
    directives: {
      defaultSrc: [`'self'`, `cloudflare.com`],
      mediaSrc: [`https://www.learningcontainer.com`, `https://archive.org`],
      imgSrc: [`'self'`, `https://cdnjs.cloudflare.com/`],
      styleSrc: [`'self'`, `https://cdnjs.cloudflare.com/`],
      fontSrc: [`'self'`, `https://cdnjs.cloudflare.com/`],
    },
  })
);
app.use(cors());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(home, globalRouter);
app.use(users, userRouter);
app.use(videos, videoRouter);

export default app;
