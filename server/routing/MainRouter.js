const { Router } = require("express");
const wordsRouter = require('./WordsRouter')
const router = Router()

router.get('', (req, res) => {
    res.send('MainRouter')
})
router.use('/words', wordsRouter)

module.exports = router