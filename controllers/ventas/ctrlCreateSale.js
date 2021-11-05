const { createSale } = require('../../services/ventas/createSale')

async function ctrlCreateSale(req, res){
  try{
    const { name, price, description, status } = req.body

    var descuento = (price * 0.1)
    var precioFinal = price - descuento

    const sale = await createSale(name, price, description, status)
    return res.status(200).send({sale, message:`Precio final del producto con descuento del Buen Fin: $${precioFinal}`})
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlCreateSale }

