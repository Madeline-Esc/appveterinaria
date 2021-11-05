const { createSale } = require('../../services/ventas/createSale')

async function ctrlCreateSale(req, res){
  try{
    const { name, price, description, status } = req.body
    console.log('Hola desde el controlador')
    const sale = await createSale(name, price, description, status)
    return res.status(200).send(sale)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlCreateSale }

