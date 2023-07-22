const Letter = require("../models/Letter")

class LettersController {
    async getAll(req, res) {
        const letters = await Letter.findAll()
        return res.json(letters)
    }

    async add(req, res) {
        const { WordId, Index, Row, Column } = req.body
        const letter = await Letter.create({ WordId, Index, Row, Column })
        return res.json(letter)
    }
}

module.exports = new LettersController()