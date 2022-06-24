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
    app.use(bodyParser.urlencoded({ extended: true }))
    app.listen(PORT, function(){
        console.log(`listening on ${PORT}`)
    })
    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html')
    })
    app.post('/quotes', (req, res) => {
        console.log(req.body)
    })
})
.catch(console.error)

console.log('May the Node be with you');