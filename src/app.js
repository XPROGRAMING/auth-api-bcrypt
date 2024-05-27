const express = require('express')
const app = express()
const db = require('../ConfigDB')
const User = require('../Models/Banco')
const hashPassword = require('../Middlewares/hashPassword')

app.use(express.json())
db.sync()

app.get('/', (req,res) =>{
    res.send('Trabalho allan')
})

app.post('/registro', hashPassword, async (req,res) =>{
    try{
        const user = await User.create({...req.body})
        res.send('Bem-sucedido')
    } catch (error) {
        res.status(500).send(error)

    }
})

app.listen(3000, () => console.log("api rondando"))