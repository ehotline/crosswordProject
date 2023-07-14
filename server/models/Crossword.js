const { DataTypes } = require("sequelize");
const sequelize = require("../db");


const Crossword = sequelize.define('Crossword', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING }
})

module.exports = Crossword