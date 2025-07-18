import keepAlive from "./keepalive.js";

let port = 8000;

import express from "express";
import cors from "cors";

let server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req,res)=>{
    res.send({message:"Keep alive backend server."});
})

server.get("/keepalive", (req,res)=>{
    res.send({message:"Server alive."});
})

await keepAlive();

server.listen(port, ()=>{
    console.log(`${Date().toString()} Keep alive backend running successfully on port: ${port}`);
})
