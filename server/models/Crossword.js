const { DataTypes } = require("sequelize");
const sequelize = require("../db");


const Crossword = sequelize.define('Crossword', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Title: { type: DataTypes.STRING },
    Description: { type: DataTypes.STRING }
})

module.exports = Crossword