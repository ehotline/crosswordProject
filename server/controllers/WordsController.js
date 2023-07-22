const Word = require("../models/Word");

class WordsController {
    async getAll(req, res) {
        const words = await Word.findAll()
        return res.json(words)
    }

    async add(req, res) {
        const { CrosswordId, Content, Direction, Description } = req.body
        const word = await Word.create({ CrosswordId, Content, Direction, Description })
        return res.json(word)
    }
}

module.exports = new WordsController()