import express from "express"; //type="Module"
// const express = require("express") type=CommonJS
import notesRoutes from "./routes/notesRoutes.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app=express();

const PORT=process.env.PORT ||5001

connectDB()
//middleware
app.use(cors({
    origin:["http://localhost:5173"]
}))
app.use(express.json())

app.use("/api/notes",notesRoutes);


app.get('/',(req,res)=>{
    res.status(200).send("Hello from server")
})

app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})

