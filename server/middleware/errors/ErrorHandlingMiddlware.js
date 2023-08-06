const ApiError = require("./ApiError")

module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ Message: err.message })
    }
    return res.status(500).json({ Message: "Unknown error" })
}