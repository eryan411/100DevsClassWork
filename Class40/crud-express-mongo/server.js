const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://eryan411:testserver123@cluster0.701bxt1.mongodb.net/?retryWrites=true&w=majority'



MongoClient.connect(connectionString, {
    useUnifiedTopology: true
}).then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'))
    app.listen(PORT, function(){
        console.log(`listening on ${PORT}`)
    })
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(results => {
            res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))
    })
    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
    })
})
.catch(console.error)

console.log('May the Node be with you');