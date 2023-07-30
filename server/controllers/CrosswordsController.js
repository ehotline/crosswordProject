const ApiError = require("../middleware/errors/ApiError");
const Crossword = require("../models/Crossword");

class CrosswordsController {
    async getAll(req, res, next) {
        try {
            const crosswords = await Crossword.findAll()
            return res.json(crosswords)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async add(req, res, next) {
        try {
            const crossword = await Crossword.create(req.body)
            return res.json(crossword)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            const { Id } = req.body
            const linesDeleted = await Crossword.destroy({ where: { Id } })
            if (linesDeleted == 1) {
                return res.json({ message: "Crossword removed" })
            }
            return next(ApiError.Internal("Something went wrong"))
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }
}

module.exports = new CrosswordsController()