
import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserService = async (payload: Partial<IUser>) => {
    const {name , email} = payload;
    const user = await User.create({
        name: name,
        email: email,
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