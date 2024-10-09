import { Router } from "express";
import { addUser, deleteUser, getAllUsers, getOneUser, updateUser } from "../controllers/users.js";


export const userRouter = Router();

userRouter.get("/userModel/:id", getOneUser);

userRouter.get("/userModel", getAllUsers);

userRouter.post("/userModel", addUser);

userRouter.patch("/userModel/:id", updateUser);

userRouter.delete("/userModel/:id", deleteUser);


export default userRouter