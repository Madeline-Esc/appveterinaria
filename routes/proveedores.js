const express = require('express')
const router = express.Router()
const passport = require('passport')

const { ctrlSelectSupplier } = require('../controllers/proveedores/ctrlSelectSupplier')
const { ctrlUpdateSupplier } = require('../controllers/proveedores/ctrlUpdateSupplier')
const { ctrlCreateSupplier } = require('../controllers/proveedores/ctrlCreateSupplier')
const { ctrlDeleteSupplier } = require('../controllers/proveedores/ctrlDeleteSupplier')

router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectSupplier
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateSupplier
)

router.put('/:company',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateSupplier
)

router.delete('/:company',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteSupplier
   )

  module.exports = router



