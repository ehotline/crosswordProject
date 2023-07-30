const ApiError = require("../middleware/errors/ApiError")
const Letter = require("../models/Letter")

class LettersController {
    async getAll(req, res, next) {
        try {
            const letters = await Letter.findAll()
            return res.json(letters)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async add(req, res, next) {
        try {
            const letter = await Letter.bulkCreate(req.body)
            return res.json(letter)
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }

    async remove(req, res, next) {
        try {
            const { Id } = req.body
            const linesDeleted = await Letter.destroy({ where: { Id } })
            if (linesDeleted == 1) {
                return res.json({ message: "Letter removed" })
            }
            return next(ApiError.Internal("Something went wrong"))
        } catch (e) {
            return next(ApiError.Internal(e.message))
        }
    }
}

module.exports = new LettersController()