import { Router } from "express"
import { Userrouter } from "../user/user.route"

export const router = Router()
const moduleRoutes = [
    {
        path : "/user",
        route : Userrouter
    }
]


moduleRoutes.forEach((route) =>{
    router.use(route.path , route.route)
})


