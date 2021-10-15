const express = require('express')
 const router = express.Router()
 const Vacunation = require('../models/vacunation')

 router.get('/', (req, res) => {
   try {
     res.json({
       name: 'Pulgas',
       description: 'Ayuda a combatir las pulgas'

     })

   }catch(error){
     console.log(`Error: ${error}`)
   }
  })

  module.exports = router
