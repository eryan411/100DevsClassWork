const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 Savage':
        {'age': 29,
        'birthname': 'Sheyaa Bin Abraham-Joseph',
        'birthlocation': 'London, England'
    },
    'Chance The Rapper':{
        'age': 29,
        'birthname': 'Chancelor Bennett',
        'birthlocation': 'Chicago, Illinois',
    },
    'Dylan':{
        'age': 29,
        'birthname': 'Dylan',
        'birthlocation': 'Dylan',
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

// app.get('/api', (req,res)=>{
//     res.json(rappers)
// })

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['Dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})