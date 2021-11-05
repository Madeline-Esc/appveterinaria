const Sales = require('../../models/sale')

async function updateSale(price, status, _id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const SaleUpdate = await Sales.findOneAndUpdate(
      {_id},
      {price, status},
      {new: true}
    )



    console.log(SaleUpdate)
    return SaleUpdate
}   catch(error){
    return {message: error.message}
}

}


module.exports = { updateSale }
