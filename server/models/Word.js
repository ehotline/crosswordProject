const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Crossword = require("./Crossword");


const Word = sequelize.define('Word', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    CrosswordId: { type: DataTypes.INTEGER },
    Content: { type: DataTypes.STRING },
    Direction: { type: DataTypes.BOOLEAN },
    Description: { type: DataTypes.STRING }
})

Crossword.hasMany(Word)

module.exports = Word