const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Word = require("./Word");

const Letter = sequelize.define('Letter', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    WordId: { type: DataTypes.INTEGER },
    Index: { type: DataTypes.INTEGER },
    Row: { type: DataTypes.INTEGER },
    Column: { type: DataTypes.INTEGER }
})

Word.hasMany(Letter)

module.exports = Letter