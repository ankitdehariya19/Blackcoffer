import dotend from "dotenv"
dotend.config()


export const PORT = process.env.PORT || 8000;
export const MONGO_URI =  process.env.MONGO_URI
export const DB_NAME=  process.env.DB_NAME