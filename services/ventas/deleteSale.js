const Sales = require('../../models/sale')

async function deleteSale(_id){
  try{
    const SaleDeleted = await Sales.deleteOne({_id})
    console.log(SaleDeleted)
    if (SaleDeleted.deletedCount == 0)
    return {SaleDeleted: SaleDeleted.deletedCount, message: 'Venta no encontrado'}
    else return {SaleDeleted: SaleDeleted.deletedCount, message: 'Venta eliminado con éxito'}
  }   catch(error){
    return {message: error.message}
  }

}


module.exports = { deleteSale }
