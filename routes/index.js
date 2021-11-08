const express = require('express')
const itemsRoute = require('./articulos')
const userRoute = require('./usuarios')
const supplierRoute = require('./proveedores')
const servicesRoute = require('./servicios')
const salesRoute = require('./ventas')
const authRoute = require('./auth')


function routerApi(app){
app.use(express.json())
app.use('/auth', authRoute)
app.use('/articulos', itemsRoute)
app.use('/usuarios', userRoute)
app.use('/proveedores', supplierRoute)
app.use('/servicios', servicesRoute)
app.use('/ventas', salesRoute)


}

module.exports = routerApi
