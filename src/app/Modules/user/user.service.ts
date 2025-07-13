

import AppError from "../../ErrorHelpers/AppError";
import { IAuthProvider, IUser } from "./user.interface";
import { User } from "./user.model";
import bcrypt from "bcryptjs";

const createUserService = async (payload: Partial<IUser>) => {
    const { email,password ,  ...rest} = payload;

    const isUserExist = await User.findOne({email})
    if(isUserExist){
        throw new AppError(500 , "User Already Exist")
    }

    const hashPassword = await bcrypt.hash(password as string , 10)
    // const isPasswordMatch = await bcrypt.compare(password as string , hashPassword)

    const autProvider : IAuthProvider = {provider: "credentials", providerid : email as string}
    const user = await User.create({
        email: email,
        password : hashPassword,
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