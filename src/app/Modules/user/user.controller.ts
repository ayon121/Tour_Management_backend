/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";


// type AsncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>

// const catchAsync = (fn : AsncHandler) => (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res , next)).catch((err : any)=> {
//         console.log(err);
//         next(err)
//     })
// }


const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserServices.createUserService(req.body)

        sendResponse(res , {
            success : true,
            statusCode : 201,
            message : "User Created Successfully",
            data : user,

        })

        // res.status(201).json({
        //     message: "User Created Successfully",
        //     user
        // })

        
    } catch (err: any) {
        console.log(err);
        next(err)


    }

}


const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await UserServices.getAllUserService()
        sendResponse(res , {
            success : true,
            statusCode : 201,
            message : "User Created Successfully",
            data : result.data,
            meta : result.meta,
        })


    } catch (err: any) {
    
        console.log(err);
        next(err)


    }
}


export const UserControllers = {
    createUser,
    getAllUser,
}