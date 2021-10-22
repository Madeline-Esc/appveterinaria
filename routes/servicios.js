const express = require('express')
const passport = require('passport')
 const router = express.Router()
 const Service = require('../models/service')

 router.get('/',
  passport.authenticate('jwt', {session:false}),
 (req, res) => {
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
