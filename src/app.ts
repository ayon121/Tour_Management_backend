/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from "cors";
import express, { Request, Response } from "express";
import { router } from "./app/Modules/routes";

import { GlobalErrorHandler } from "./app/Middlewares/globalerrorHandler";
import notFound from "./app/Middlewares/notFound";


const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/v1/", router)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})


app.use(GlobalErrorHandler)


app.use(notFound)

export default app