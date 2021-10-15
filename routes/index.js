const itemsRoute = require('./articulos')
const userRoute = require('./usuarios')
const supplierRoute = require('./proveedores')

function routerApi(app){
app.use('/articulos', itemsRoute)
app.use('/usuarios', userRoute)
app.use('/proveedores', supplierRoute)


}

module.exports = routerApi
