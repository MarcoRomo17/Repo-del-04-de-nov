import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { test } from "./backend/controllers/juego.controller.js";

dotenv.config()

mongoose(process.env.url).then(
    ()=>{
        console.log("Aplicacion conectada a la BD")
    }
).catch((error)=>{
    console.log("Salio el error: ", error)
})


app.use(cors());

app.listen(4005, ()=>{
    console.log("La app se escucha bien")
})
