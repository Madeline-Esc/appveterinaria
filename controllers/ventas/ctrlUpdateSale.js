const { updateSale } = require('../../services/ventas/updateSale')

async function ctrlUpdateSale(req, res){
  try{
    const { price, status} = req.body
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const sale = await updateSale(price, status, _id)
    return res.status(200).send(sale)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
}
module.exports = { ctrlUpdateSale }

