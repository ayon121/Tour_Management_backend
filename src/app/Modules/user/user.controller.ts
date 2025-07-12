import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const user = await UserServices.createUserService(req.body)

        res.status(201).json({
            message : "User Created Successfully",
            user
        })
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err : any) {
        // eslint-disable-next-line no-console
        console.log(err);
        next(err)

        
    }

}


export const UserControllers = {
    createUser
}