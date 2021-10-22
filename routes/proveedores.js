const express = require('express')
const router = express.Router()
const Supplier = require('../models/supplier')

 router.get('/', (req, res) => {
   try {
     res.json({
       name: 'Roberto',
       company: 'Purina'

     })

   }catch(error){
     console.log(`Error: ${error}`)
   }
  })

  module.exports = router


