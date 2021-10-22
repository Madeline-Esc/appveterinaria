const express = require('express')
 const router = express.Router()
 const passport = require('passport')
 const Sale = require('../models/sale')

 router.get('/',
 passport.authenticate('jwt', {session:false}),
 (req, res) => {
   try {
     res.json({
       price: 500,
       description: 'Compra de alimento para perro'

     })

   }catch(error){
     console.log(`Error: ${error}`)
   }
  })

  module.exports = router
