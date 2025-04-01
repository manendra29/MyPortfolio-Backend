import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { contactMe } from "./controller/contact.js";

// config({
//     path:"./config/config.env"
// })
config();
const app=express();
app.use(cors({
    origin: [
      '',
      'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // This is crucial for handling credentials
  }));




app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/contact",contactMe);


export default app; 