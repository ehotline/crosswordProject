const Letter = require("../models/Letter")

class LettersController {
    async getAll(req, res, next) {
        const letters = await Letter.findAll()
        return res.json(letters)
    }
}

module.exports = new LettersController()