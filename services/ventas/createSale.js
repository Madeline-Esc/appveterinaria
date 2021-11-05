const Sales = require('../../models/sale')

async function createSale(name, price,description, status){
  try{
    const SaleCreated = await Sales.create({
      name,
      price,
      description,
      status
    })

    console.log(SaleCreated)
    return SaleCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createSale }
