import { Router } from "express";
import { AuthControllers } from "./auth.contoller";

const router = Router()

router.post("/login", AuthControllers.creadentialLogin)

export const AuthRoutes = router;