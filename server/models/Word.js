const { DataTypes } = require("sequelize");
const sequelize = require("../db");


const Word = sequelize.define('Word', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Content: { type: DataTypes.STRING },
    Direction: { type: DataTypes.BOOLEAN },
    Description: { type: DataTypes.STRING }
})

module.exports = Word