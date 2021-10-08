const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Transportadora para Perros',
      price: 500
    },
    {
      name: 'Correa para Perros',
      price: 35
    },
    {
      name: 'Comida para gatos marca Purina catchow Adultos 3kg',
      price: 229
    },
    {
      name: 'Arena para gatos marca Scoop Away 11.6kg',
      price: 360
    },
    {
      name: 'Jaula para aves pequeñas',
      price: 400
    },
    {
      name: 'Spray antipulgas para Perros 250ml',
      price: 95
    }

  ])
})

router.get('/perros', (req, res) => {
  res.json([
    {
      name: 'Trasportadora para Perros',
      price: 500
    },
    {
      name: 'Correa para Perros',
      price: 35
    },
    {
      name: 'Spray antipulgas para Perros 250ml',
      price: 95
    }
  ])
})

module.exports = router
