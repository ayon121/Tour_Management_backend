import mongoose from "mongoose";
import { Server } from "http";
import  express  from "express";

const app = express()


let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://dataAdmin:ayon1234@cluster0.6rjuyq3.mongodb.net/tour_mangement?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected to DB!!");

        server = app.listen(5000, () => {
            console.log(`Server is listening to port 5000`);
        });
       
    } catch (error) {
        
    }
}

startServer()