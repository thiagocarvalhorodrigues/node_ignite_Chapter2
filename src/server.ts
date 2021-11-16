require('dotenv').config()
import express from "express";
import { createCourse } from './routes'


const app = express();

const { PORT } = process.env;

app.get("/", createCourse);
    // return response.json({ message: "Olá Malu, bem vinda ao Mundo de Jesus" })

// })

app.listen(PORT);

console.log(`Servidor conectado na porta ${PORT}`);