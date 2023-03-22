import { Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres", "postgres", "12345", {
  host: "localhost",
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
