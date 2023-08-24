const jwt = require("jsonwebtoken")
const ApiError = require("./errors/ApiError")

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token) {
            next(ApiError.Unauthorized("Не авторизован"))
        }
        const decoded = jwt.verify(token, process.env.AUTH_KEY)
        req.Token = decoded
        next()
    } catch (e) {
        next(ApiError.Unauthorized("Не авторизован"))
    }
}