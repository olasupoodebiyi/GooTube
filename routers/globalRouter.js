import express from "express";
import routes from "./routes";
import { home, search } from "./../controllers/videoController";
import { join, login, logout } from "./../controllers/userController";

const globalRouter = express.Router();

const {
  home: homeRoute,
  join: joinRoute,
  login: loginRoute,
  logout: logoutRoute,
  search: searchRoute,
} = routes;

globalRouter.get(homeRoute, home);
globalRouter.get(joinRoute, join);
globalRouter.get(loginRoute, login);
globalRouter.get(logoutRoute, logout);
globalRouter.get(searchRoute, search);

export default globalRouter;
