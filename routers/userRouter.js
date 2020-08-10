import express from "express";
import routes from "./routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "./../controllers/userController";

const userRouter = express.Router();

const {
  users: usersRoute,
  userDetail: userDetailRoute,
  editProfile: editProfileRoute,
  changePassword: changePasswordRoute,
} = routes;

userRouter.get(editProfileRoute, editProfile);
userRouter.get(changePasswordRoute, changePassword);
userRouter.get(userDetailRoute, userDetail);

export default userRouter;
