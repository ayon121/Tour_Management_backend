/* eslint-disable @typescript-eslint/no-non-null-assertion */

import AppError from "../../ErrorHelpers/AppError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";

const createUserService = async (payload: Partial<IUser>) => {
    const { email,  ...rest} = payload;

    const isUserExist = await User.findOne({email})
    if(isUserExist){
        throw new AppError(500 , "User Already Exist")
    }

    const autProvider : IAuthProvider = {provider: "credentials", providerid : email as string}
    const user = await User.create({
        email: email,
        auths : [autProvider],
        ...rest
    })

    return user
}

const getAllUserService = async() => {
    const users = await User.find({})

    const totalUsers = await User.countDocuments()

    return {
        data : users,
        meta : {
            total : totalUsers
        }
    }
}

export const UserServices = {
    createUserService,
    getAllUserService
} 


//route => controllers => service => model => DB