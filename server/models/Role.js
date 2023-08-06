const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Role = sequelize.define("Role", {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Title: { type: DataTypes.STRING }
})

module.exports = Role