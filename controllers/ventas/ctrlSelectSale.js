const { selectSale } = require('../../services/ventas/selectSale')

async function ctrlSelectSale(req, res){
  try{
    const { _id } = req.query
    console.log('Hola desde el controlador')
    const sale = await selectSale(_id)
    return res.status(200).send(sale)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlSelectSale }

