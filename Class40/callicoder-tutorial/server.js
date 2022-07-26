const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3000
const dbConfig = require('./config/database.config.js')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database")
}).catch(err => {
    console.log("Could not connect to the database. Exiting now...", err)
    process.exit()
})

require('./app/routes/note.routes.js')(app);


app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"messge" : "Welcome to the EasyNotes application. Organize and keep track of all your notes"})
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})