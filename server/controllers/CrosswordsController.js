const Crossword = require("../models/Crossword");

class CrosswordsController {
    async getAll(req, res) {
        const crosswords = await Crossword.findAll()
        return res.json(crosswords)
    }

    async add(req, res) {
        const { Title, Description } = req.body
        const crossword = await Crossword.create({ Title, Description })
        return res.json(crossword)
    }
}

module.exports = new CrosswordsController()