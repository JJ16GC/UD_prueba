import { Sequelize } from "sequelize";
import { DB_STORAGE } from "./config";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: DB_STORAGE,
  logging: false, // Puedes cambiar a console.log para ver las consultas SQL
});

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection to SQLite has been established successfully.");
    
    // Sincronizar modelos
    await sequelize.sync({ force: false });
    console.log("Database models synchronized.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

export default connectToDatabase;
