const { DataTypes } = require("sequelize");
const sequelize = require("../db");
const Word = require("./Word");

const Letter = sequelize.define('Letter', {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    VerticalWordId: { type: DataTypes.INTEGER },
    VerticalIndex: { type: DataTypes.INTEGER },
    HorizontalWordId: { type: DataTypes.INTEGER },
    HorizontalIndex: { type: DataTypes.INTEGER },
    Row: { type: DataTypes.INTEGER },
    Column: { type: DataTypes.INTEGER }
})

Word.hasMany(Letter)

module.exports = Letter