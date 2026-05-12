import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const DB_STORAGE = process.env.DB_STORAGE || "./database.sqlite";