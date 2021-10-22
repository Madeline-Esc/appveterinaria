const express = require('express')
const router = express.Router()
const passport = require('passport')
const Supplier = require('../models/supplier')

 router.get('/',
 passport.authenticate('jwt', {session:false}),
 (req, res) => {
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


