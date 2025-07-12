/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./app/Modules/routes";
import { envVars } from "./app/Config/env";


const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/v1/", router)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})


app.use((err: any, req: Request, res: Response , next : NextFunction)  => {
    res.status(500).json({
        success: false,
        message: `Something Went Wrong!!${err.message} From Global Error`,
        err,
        stack : envVars.NODE_ENV == "development" ? err.stack : null
    
    })
})


export default app