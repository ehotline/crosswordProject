
const { DataTypes } = require("sequelize")
const sequelize = require("../db")
const Role = require("./Role")

const User = sequelize.define("User", {
    Id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING, allowNull: true },
    HashPassword: { type: DataTypes.STRING },
    RoleId: { type: DataTypes.INTEGER }
})

User.hasOne(Role)

module.exports = User