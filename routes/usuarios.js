 const express = require('express')
 const router = express.Router()
 const User = require('../models/user')

 router.get('/', (req, res) => {
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




