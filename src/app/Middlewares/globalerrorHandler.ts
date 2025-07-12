/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../Config/env"

export const GlobalErrorHandler = (err: any, req: Request, res: Response , next : NextFunction)  => {
    res.status(500).json({
        success: false,
        message: `Something Went Wrong!!${err.message} From Global Error`,
        err,
        stack : envVars.NODE_ENV == "development" ? err.stack : null
    
    })
}