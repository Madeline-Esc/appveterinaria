const Suppliers = require('../../models/supplier')

async function updateSupplier(name, phone, company){
  try{
    console.log('Hola desde el servicio')
    console.log(company)
    const supplierUpdated = await Suppliers.findOneAndUpdate(
      {company},
      {name, phone},
      {new: true}
    )

    console.log(supplierUpdated)
    return supplierUpdated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { updateSupplier }
