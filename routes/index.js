const itemsRoute = require('./articulos')
const userRoute = require('./usuarios')
const supplierRoute = require('./proveedores')
const servicesRoute = require('./servicios')
const vacunationRoute = require('./vacunas')

function routerApi(app){
app.use('/articulos', itemsRoute)
app.use('/usuarios', userRoute)
app.use('/proveedores', supplierRoute)
app.use('/servicios', servicesRoute)
app.use('/vacunas', vacunationRoute)


}

module.exports = routerApi
