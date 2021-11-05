const Suppliers = require('../../models/supplier')

async function selectSupplier(company){
  try{
    console.log('Hola desde el servicio')
    console.log(company)

    const supplier = !company ? await Suppliers.find() : await Suppliers.find({company})
    return supplier
}   catch(error){
    return {message: error.message}
}

}


module.exports = { selectSupplier }
