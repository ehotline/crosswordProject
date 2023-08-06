const ApiError = require("../middleware/errors/ApiError")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const generateJwt = (Id, Username, RoleId) => {
    return jwt.sign(
        { Id, Username, RoleId },
        process.env.AUTH_KEY,
        { expiresIn: "24h" }
    )
}

class UserController {
    async register(req, res, next) {
        const { Username, Password, Email } = req.body
        if (!Username || !Password) {
            return next(ApiError.BadRequest("Необходимо имя пользователя и пароль"))
        }
        const duplicate = await User.findOne({ where: { Name: Username } })
        if (duplicate) {
            return next(ApiError.BadRequest("Пользователь с таким именем уже существует"))
        }
        const hashPassword = await bcrypt.hash(Password, 12)
        const user = await User.create({ Name: Username, Email: Email, HashPassword: hashPassword, RoleId: 2 })
        const token = generateJwt(user.Id, user.Name, user.RoleId)
        return res.json({ Token: token })
    }

    async login(req, res, next) {
        const { Username, Password } = req.body
        const user = await User.findOne({ where: { Name: Username } })
        if (!user) {
            return next(ApiError.NotFound("Пользователя с таким именем не существует"))
        }
        let comparePassword = bcrypt.compareSync(Password, user.HashPassword)
        if (!comparePassword) {
            return next(ApiError.Unauthorized("Неверный пароль"))
        }
        const token = generateJwt(user.Id, user.Name, user.RoleId)
        return res.json({ Token: token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.User.Id, req.User.Name, req.User.RoleId)
        return res.json({ Token: token })
    }
}

module.exports = new UserController()