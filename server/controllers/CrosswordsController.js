const ApiError = require("../middleware/errors/ApiError");
const Crossword = require("../models/Crossword");

class CrosswordsController {
    async getAll(req, res, next) {
        const crosswords = await Crossword.findAll()
        return res.json(crosswords)
    }

    async add(req, res) {
        const { Title, Description } = req.body
        const crossword = await Crossword.create({ Title, Description })
        return res.json(crossword)
    }

    async remove(req, res) {
        const { Id } = req.body
        const linesDeleted = await Crossword.destroy({ where: { Id } })
        const result = linesDeleted == 1 ? "Crossword removed" : "Error"
        return res.json(result)
    }
}

module.exports = new CrosswordsController()