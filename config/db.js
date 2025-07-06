require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgre",
    ssl:{
        require: true,
        rejectUnauthorized: false
    }
});

module.exports = sequelize;