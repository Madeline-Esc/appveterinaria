const itemsRoute= require('./articulos')
const customersRoute= require('./clientes')



function routerApi(app){
app.use('/articulos', itemsRoute)
app.use('/clientes', customersRoute)


}

module.exports = routerApi
