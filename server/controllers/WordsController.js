const Word = require("../models/Word");

class WordsController {
    async getAll(req, res, next) {
        const words = await Word.findAll()
        return res.json(words)
    }
}

module.exports = new WordsController()