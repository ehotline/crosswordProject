const Crossword = require("../models/Crossword");

class CrosswordsController {
    async getAll(req, res, next) {
        const crosswords = await Crossword.findAll()
        return res.json(crosswords)
    }
}

module.exports = new CrosswordsController()