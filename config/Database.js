import { Sequelize } from "sequelize";

const db = new Sequelize('login_db(1)', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;