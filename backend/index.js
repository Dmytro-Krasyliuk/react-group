import express from 'express'
import wiki from 'wikipedia'
wiki.setLang('uk')
let a = await wiki.page('London')
let text = await a.content()

const app = express()

app.get('/wiki', (req, res)=> {
    res.send(text)
})

app.listen(3000)
// http://localhost:3000/wiki