const Sales = require('../../models/sale')

async function createSale(name, price,description, status){
  try{

    var descuento = (price * 0.1)
    var precioFinal = price - descuento

    const SaleCreated = await Sales.create({
      name,
      price,
      description,
      status
    })

    console.log(SaleCreated)
    console.log(`Precio final del producto con descuento del Buen Fin: $${precioFinal}`)
    return SaleCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createSale }


