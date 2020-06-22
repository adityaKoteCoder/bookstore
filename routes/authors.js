const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//ALLL AUTHORS
router.get('/', (req,res) => {
    res.render('authors/index')
})

//New Author
router.get('/new', (req,res) => {
    res.render('authors/new', { author: new Author()})
})

//Create Author Routes
router.post('/', (req,res) => {
    res.send('Create')
})


module.exports = router