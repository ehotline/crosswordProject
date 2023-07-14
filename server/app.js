require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const sequelize = require('./db')
const models = require('./models/Models')
const cors = require('cors')
const router = require('./routing/MainRouter')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT - ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()