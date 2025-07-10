import cors from "cors";
import express, { Request, Response } from "express";
import { Userrouter } from "./app/Modules/user/user.route";


const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/v1/user" , Userrouter)


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})



export default app