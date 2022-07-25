const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

const PORT = 3000

MongoClient.connect('mongodb+srv://eryan411:testserver123@cluster0.701bxt1.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true})
.then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static('public'));
    app.use(bodyParser.json())
    app.listen(PORT, () =>{
        console.log(`Listening on port ${PORT}`)
    })
    
    // Add quote to list
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
        .then(quotes => {
            res.render('index.ejs', { quotes: quotes })
        })
        .catch(error => console.error(error))
    })
    
    // post the quote to MongoDB
    app.post('/quotes', (req, res) =>{
        quotesCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    // Update quote to darth vader
    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(
            { name: 'Yoda' },
            {
                $set: {
                    name: req.body.name,
                    quote: req.body.quote
                }
            },
            {
                upsert: true
            }
        )
        .then(result => {
            res.json('Success')
        })
        .catch(error => console.error(error))
    })

    // Delete Darth Vader Quotes
    app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
            { name: req.body.name },
        )
        .then(result => {
            if(result.deletedCount === 0){
                return res.json('No quote to delete')
            }
            res.json('Deleted Darth Vader\'s quote')
        })
        .catch(error => console.error(error))
    })

})
.catch(console.error)




console.log('May the node be with you')