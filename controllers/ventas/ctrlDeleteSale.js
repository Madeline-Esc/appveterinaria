const { deleteSale } = require('../../services/ventas/deleteSale')

async function ctrlDeleteSale(req, res){
  try{
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const sale = await deleteSale(_id)
    return res.status(200).send(sale)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }


}
module.exports = { ctrlDeleteSale }

