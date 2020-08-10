import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "GooTube";
  res.locals.routes = routes;
  next();
};
