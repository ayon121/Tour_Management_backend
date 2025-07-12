import {  Router } from "express";
import { UserControllers } from "./user.controller";
import { validateRequest } from "../../Middlewares/validateRequest";
import { createUserZodSchema } from "./user.validation";


export const Userrouter = Router()




Userrouter.post("/register",validateRequest(createUserZodSchema) , UserControllers.createUser)
Userrouter.get("/all-users", UserControllers.getAllUser)



