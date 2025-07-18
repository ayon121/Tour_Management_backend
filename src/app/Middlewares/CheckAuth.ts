import { NextFunction, Request, Response } from "express"
import AppError from "../ErrorHelpers/AppError"
import { JwtPayload } from "jsonwebtoken"
import { envVars } from "../Config/env"
import { verifyToken } from "../utils/jwt"

export const checkAuth = (...authRoles : string[] ) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accesstoken = req.headers.authorization

        if(!accesstoken){
            throw new AppError(404 , "User Not Verified")
        }
        const verifiedToken = verifyToken(accesstoken , envVars.JWT_SECRET)  as JwtPayload
        // // eslint-disable-next-line no-console
        // console.log(verifiedToken);

        if(!verifiedToken){
            throw new AppError(403 , "User Not Verified")
        }

        if(!authRoles.includes(verifiedToken.role)){
            throw new AppError(403 , "User Not Permitted")
        }

        req.user = verifiedToken
        next()

    } catch (err) {
        next(err)
    }


}