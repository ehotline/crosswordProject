const ApiError = require("../middleware/errors/ApiError");
const Word = require("../models/Word");

class WordsController {
    async getAll(req, res, next) {
        try {
            const words = await Word.findAll()
            return res.json(words)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async add(req, res, next) {
        try {
            const word = await Word.create(req.body)
            return res.json(word)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            const { Id } = req.body
            const linesDeleted = await Word.destroy({ where: { Id } })
            if (linesDeleted == 1) {
                return res.json({ message: "Word removed" })
            }
            return next(ApiError.Internal("Something went wrong"))
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }
}

module.exports = new WordsController()