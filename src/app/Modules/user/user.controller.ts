import { Request, Response } from "express";
import { User } from "./user.model";


const createUser = async (req : Request , res : Response) => {
    try {
        const {name , email} = req.body;

        const user = await User.create({
            name : name ,
            email : email,
        })

        res.status(201).json({
            message : "User Created Successfully",
            user
        })
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err : any) {
        console.log(err);
        res.status(400).json({
            message : `Something Went Wrong, Please Try Again Later ${err.message}`
        })

        
    }

}


export const UserControllers = {
    createUser
}