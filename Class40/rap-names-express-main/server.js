const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 2121
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'rap'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(req, res)=>{
    db.collection('rappers').find().sort({likes: -1}).toArray()
    .then(data => {
        res.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.post('/addRapper', (req, res) => {
    db.collection('rappers').insertOne({stageName: req.body.stageName,
    birthName: req.body.birthName, likes: 0})
    .then(res => {
        console.log('Rapper Added')
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/addOneLike', (req, res) => {
    db.collection('rappers').updateOne({stageName: req.body.stageNameS, birthName: req.body.birthNameS,likes: req.body.likesS},{
        $set: {
            likes:req.body.likesS + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(res => {
        console.log('Added One Like')
        res.json('Like Added')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteRapper', (req, res) => {
    db.collection('rappers').deleteOne({stageName: req.body.stageNameS})
    .then(res => {
        console.log('Rapper Deleted')
        res.json('Rapper Deleted')
    })
    .catch(error => console.error(error))

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})