import { envVars } from "../../Config/env";
import AppError from "../../ErrorHelpers/AppError"
import { createToken } from "../../utils/jwt";
import { IUser } from "../user/user.interface"
import { User } from "../user/user.model"
import bcrypt from "bcryptjs";

const creadentialLoginService = async (payload: Partial<IUser>) => {
    const { email, password } = payload

    const isUserExist = await User.findOne({ email })
    if (!isUserExist) {
        throw new AppError(500, "User Doesn't Exist")
    }

    const isPasswordMatch = await bcrypt.compare(password as string , isUserExist.password as string)

    if(!isPasswordMatch){
        throw new AppError(500, "Incorrect Password")
    }

    // jwt
    const jwtPayload = {
        userId : isUserExist._id,
        email : isUserExist.email,
        role : isUserExist.role
    }
    const accesstoken = createToken(jwtPayload , envVars.JWT_SECRET , envVars.Jwt_ACCESS_EXPIRES  )
    // can be used
    // const {password , ...rest} = isUserExist
    // returns the full user
    return {
        accesstoken
    }

}

export const AuthServices = {
    creadentialLoginService
}