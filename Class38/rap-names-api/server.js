const express = require('express')
const app = express()
const PORT = 8000

const savage = {
    'age': 29,
    'birthname': 'Sheyaa Bin Abraham-Joseph',
    'birthlocation': 'London, England',
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res)=>{
    res.json()
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})