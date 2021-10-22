const express = require('express')
const itemsRoute = require('./articulos')
const userRoute = require('./usuarios')
const supplierRoute = require('./proveedores')
const servicesRoute = require('./servicios')
const salesRoute = require('./ventas')
const { checkApiKey } = require('../middleware/auth.handler')
const authRoute = require('./auth')

function routerApi(app){
app.use(express.json())
app.use('/auth', authRoute)
app.use('/articulos', checkApiKey, itemsRoute)
app.use('/usuarios', userRoute)
app.use('/proveedores', checkApiKey, supplierRoute)
app.use('/servicios', checkApiKey, servicesRoute)
app.use('/ventas', checkApiKey, salesRoute)


}

module.exports = routerApi
