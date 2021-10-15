const express = require('express')
 const router = express.Router()
 const Service = require('../models/service')

 router.get('/', (req, res) => {
   try {
     res.json({
       name: 'Vacuna Mensual',
       price: '600'

     })

   }catch(error){
     console.log(`Error: ${error}`)
   }
  })

  module.exports = router
