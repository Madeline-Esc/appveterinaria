const itemsRoute = require('./articulos')
const userRoute = require('./usuarios')
const supplierRoute = require('./proveedores')
const servicesRoute = require('./servicios')
const salesRoute = require('./ventas')
const { checkApiKey } = require('../middleware/auth.handler')

function routerApi(app){
app.use('/articulos', checkApiKey, itemsRoute)
app.use('/usuarios', userRoute)
app.use('/proveedores', checkApiKey, supplierRoute)
app.use('/servicios', servicesRoute)
app.use('/ventas', salesRoute)


}

module.exports = routerApi
