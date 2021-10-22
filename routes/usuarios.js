 const express = require('express')
 const router = express.Router()
 const passport = require('passport')
 const User = require('../models/user')

 router.get('/',
 passport.authenticate('jwt', {session:false}),
  (req, res) => {
   try {
     res.json({
       name: 'Madeline',
       lastName: 'Escoto'

     })

   }catch(error){
     console.log(`Error: ${error}`)
   }
  })

  module.exports = router




