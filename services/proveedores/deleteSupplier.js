const Suppliers = require('../../models/supplier')

async function deleteSupplier(company){
  try{
    const supplierDeleted = await Suppliers.deleteOne({company})
    console.log(supplierDeleted)
    if (supplierDeleted.deletedCount == 0)
    return {userDeleted: supplierDeleted.deletedCount, message: 'Proveedor no encontrado'}
    else return {userDeleted: supplierDeleted.deletedCount, message: 'Proveedor eliminado con éxito'}
  }   catch(error){
    return {message: error.message}
  }

}


module.exports = { deleteSupplier }
