const ApiError = require("../middleware/errors/ApiError")

class UserController {
    async register(req, res, next) {
        const { username, password, role } = req.body
        if(!username || !password) {
            return next(ApiError.BadRequest())
        }
    }
}