const { Router } = require("express");
const router = Router()
const controller = require('../controllers/LetterController')

router.get('', controller.getAll)

module.exports = router