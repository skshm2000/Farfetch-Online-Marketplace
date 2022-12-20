const express = require('express')
const fs = require('fs')

const app = express()

app.get('/men', async (req, res)=>{
    let data = fs.readFileSync('farfetch_men.json', 'utf-8', (err)=>{
        console.log(err)
    })

    res.send(JSON.parse(data))
})

app.get('/kids', async (req, res)=>{
    let data = fs.readFileSync('farfetch_kids.json', 'utf-8', (err)=>{
        console.log(err)
    })

    res.send(JSON.parse(data))
})

app.get('/women', async (req, res)=>{
    let data = fs.readFileSync('farfetch_women.json', 'utf-8', (err)=>{
        console.log(err)
    })

    res.send(JSON.parse(data))
})

app.listen(8080, ()=>{
    console.log('Server Started')
})