const express = require('express')
const router = express.Router()
const passport = require('passport')
const { ctrlSelectItem } = require('../controllers/articulos/ctrlSelectItem')
const { ctrlUpdateItem } = require('../controllers/articulos/ctrlUpdateItem')
const { ctrlCreateItem } = require('../controllers/articulos/ctrlCreateItem')
const { ctrlDeleteItem } = require('../controllers/articulos/ctrlDeleteItem')

router.get('/',
  passport.authenticate('jwt', {session:false}),
  ctrlSelectItem
)

router.post('/',
  passport.authenticate('jwt', {session:false}),
  ctrlCreateItem
)

router.put('/:_id',
  passport.authenticate('jwt', {session:false}),
  ctrlUpdateItem
)

router.delete('/:_id',
  passport.authenticate('jwt', {session:false}),
  ctrlDeleteItem
   )

module.exports = router
