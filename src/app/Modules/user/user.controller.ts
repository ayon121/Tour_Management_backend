import { Request, Response } from "express";
import { UserServices } from "./user.service";


const createUser = async (req : Request , res : Response) => {
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
        res.status(400).json({
            message : `Something Went Wrong, Please Try Again Later ${err.message}`
        })

        
    }

}


export const UserControllers = {
    createUser
}