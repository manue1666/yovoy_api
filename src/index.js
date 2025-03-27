import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde .env

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Aplicación conectada a la base de datos");
        app.listen(4000, () => {
            console.log("Aplicación corriendo");
            console.log("http://127.0.0.1:4000");
        });
    } catch (error) {
        console.log("Algo falló con la base de datos:", error);
    }
}

main();
