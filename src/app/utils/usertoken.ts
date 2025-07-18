import { envVars } from "../Config/env";
import { IUser } from "../Modules/user/user.interface";
import { createToken } from "./jwt";

export const CreateUserToken = (user: Partial<IUser>) => {
    const jwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role
    }
    const accesstoken = createToken(jwtPayload, envVars.JWT_SECRET, envVars.Jwt_ACCESS_EXPIRES)

    const refreshToken = createToken(jwtPayload, envVars.Jwt_REFRESH_SECRET, envVars.Jwt_REFRESH_EXPRIES)

    return {
        accesstoken,
        refreshToken
    }
}