import { Router } from "express"
import { Userrouter } from "../user/user.route"
import { AuthRoutes } from "../auth/auth.route"
import { DivisionRoutes } from "../Devision/division.route"
import { Tourrouter } from "../tour/tour.route"

export const router = Router()
const moduleRoutes = [
    {
        path : "/user",
        route : Userrouter
    },
    {
        path : "/auth",
        route : AuthRoutes
    },
     {
        path: "/division",
        route: DivisionRoutes
    },
    {
        path: "/tour",
        route: Tourrouter
    }
]


moduleRoutes.forEach((route) =>{
    router.use(route.path , route.route)
})


