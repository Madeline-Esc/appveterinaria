const itemsRoute= require('./articulos')
//const customersRoute= require('./clientes')
//const adoptionRoute= require('./adopcion')
//const suppliersRoute= require('./proveedores')
//const servicesRoute= require('./servicios')

function routerApi(app){
app.use('/articulos', itemsRoute)
//app.use('/clientes', customersRoute)
//app.use('/adopcion', adoptionRoute)
//app.use('/proveedores', suppliersRoute)
//app.use('/servicios', servicesRoute)

}

module.exports = routerApi
