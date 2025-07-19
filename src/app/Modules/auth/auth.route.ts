import { Router } from "express";
import { AuthControllers } from "./auth.contoller";
import { checkAuth } from "../../Middlewares/CheckAuth";
import { Role } from "../user/user.interface";

const router = Router()

router.post("/login", AuthControllers.creadentialLogin)
router.post("/refresh-token", AuthControllers.getNewAccessToken)
router.post("/logout" , AuthControllers.logout)
router.post("/reset-password", checkAuth(...Object.values(Role)) , AuthControllers.resetPassword)

export const AuthRoutes = router;