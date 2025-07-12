import { Router } from "express";
import { UserControllers } from "./user.controller";

export const Userrouter = Router()


Userrouter.post("/register" , UserControllers.createUser)
Userrouter.get("/all-users" , UserControllers.getAllUser)



