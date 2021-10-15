const express = require('express')
const router = express.Router()
const Item = require('../models/item')

router.get('/', (req, res) => {
  try {
    res.json({
      name: 'Transportadora para Perros',
      price: '1500'

    })

  }catch(error){
    console.log(`Error: ${error}`)
  }
 })

module.exports = router
