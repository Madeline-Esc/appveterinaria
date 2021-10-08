const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Producto A',
      price: 1000
    },
    {
      name: 'Producto B',
      price: 1500
    }
  ])
})

router.get('/filter', (req, res) => {
  res.json(
    {
      name: 'Producto A',
      price: 1000
    })
})

module.exports = router
