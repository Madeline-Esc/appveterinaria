const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectUser } = require('../controllers/usuarios/ctrlSelectUser')
const { ctrlUpdateUser } = require('../controllers/usuarios/ctrlUpdateUser')
const { ctrlCreateUser } = require('../controllers/usuarios/ctrlCreateUser')
const { ctrlDeleteUser } = require('../controllers/usuarios/ctrlDeleteUser')


router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectUser
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateUser
)

router.put('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateUser
)

router.delete('/:email',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteUser
   )

  module.exports = router




