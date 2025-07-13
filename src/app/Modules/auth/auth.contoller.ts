/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { NextFunction, Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { AuthServices } from "./auth.service";

const creadentialLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const loginInfo = await AuthServices.creadentialLoginService(req.body)
        
        sendResponse(res , {
            success : true,
            statusCode : 201,
            message : "User Logged In Successfully",
            data : loginInfo
        })
    } catch (err: any) {
        console.log(err);
        next(err)
    }
}

export const AuthControllers = {
    creadentialLogin  
}