const express = require('express')
const app = express()
const PORT = 3001

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2022-05-30T17:30:31098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2022-05-30T18:39:34091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2022-05-30T19:20:298Z",
        important: true
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const note = notes.find(note => 
        console.log(note.id, typeof note.id, id, typeof id, note.id === id))
        return note.id === id
    console.log(note)
    res.json(note)
})

app.listen(PORT)
console.log(`Server is running on port ${PORT}`)