const express = require('express')
 const router = express.Router()
 const passport = require('passport')
 const { ctrlSelectSale } = require('../controllers/ventas/ctrlSelectSale')
 const { ctrlUpdateSale } = require('../controllers/ventas/ctrlUpdateSale')
 const { ctrlCreateSale } = require('../controllers/ventas/ctrlCreateSale')
 const { ctrlDeleteSale } = require('../controllers/ventas/ctrlDeleteSale')


 router.get('/',
   passport.authenticate('jwt', {session:false}),
   ctrlSelectSale
 )

 router.post('/',
   passport.authenticate('jwt', {session:false}),
   ctrlCreateSale
 )

 router.put('/:_id',
   passport.authenticate('jwt', {session:false}),
   ctrlUpdateSale
 )

 router.delete('/:_id',
   passport.authenticate('jwt', {session:false}),
   ctrlDeleteSale
    )

  module.exports = router
