const { Router } = require("express");
const crosswordsRouter = require('./CrosswordsRouter')
const wordsRouter = require('./WordsRouter')
const lettersRouter = require('./LettersRouter')
const router = Router()

router.get('', (req, res) => {
    res.send('MainRouter')
})
router.use('/crosswords', crosswordsRouter)
router.use('/words', wordsRouter)
router.use('/letters', lettersRouter)

module.exports = router