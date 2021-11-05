const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectService } = require('../controllers/servicios/ctrlSelectService')
const { ctrlUpdateService } = require('../controllers/servicios/ctrlUpdateService')
const { ctrlCreateService } = require('../controllers/servicios/ctrlCreateService')
const { ctrlDeleteService } = require('../controllers/servicios/ctrlDeleteService')


router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectService
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateService
)

router.put('/:_id',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateService
)

router.delete('/:_id',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteService
   )

  module.exports = router
