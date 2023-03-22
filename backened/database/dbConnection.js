import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOSTNAME,
  dialect: "postgres",
});

const dbConnection = async (sequelize) => {
  try {
    await sequelize.authenticate();
    console.log("Successfully authenticate");
    await sequelize.sync();    
    console.log("Successfully sync");
  } catch (error) {
    console.log("CONNECTION ISSUE")
  }
}

dbConnection(sequelize);

export default sequelize;
