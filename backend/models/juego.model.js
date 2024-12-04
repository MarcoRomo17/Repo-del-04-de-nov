import { Schema} from "mongoose";

const JuegoEsquema= Schema({
    titulo: String,
    precio: number
})

export const JuegoModel= model("JUEGOS", JuegoEsquema )