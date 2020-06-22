import express from "express";
import routes from "../routes";
import {
	users,
	userDetail,
	editProfile,
	changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

// userRouter.get("/", (req, res) => res.send("user index"));
// userRouter.get("/edit", (req, res) => res.send("user edit"));
// userRouter.get("/password", (req, res) => res.send("user password"));

// M data
// V how does the data look
// C function that looks for the data

// userRouter.get(routes.users, (req, res) => res.send("Users"));
// userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
// userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
// userRouter.get(routes.changePassword, (req, res) =>
// 	res.send("Change Password")
// );

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
