const { Router } = require("express");
const router = Router()
const controller = require('../controllers/WordsController')

router.get('', controller.getAll)

module.exports = router