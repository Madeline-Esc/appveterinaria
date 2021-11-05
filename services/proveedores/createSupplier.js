const Suppliers = require('../../models/supplier')

async function createSupplier(name, company, phone){
  try{
    const supplierCreated = await Suppliers.create({
      name,
      company,
      phone
    })

    console.log(supplierCreated)
    return supplierCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createSupplier }
