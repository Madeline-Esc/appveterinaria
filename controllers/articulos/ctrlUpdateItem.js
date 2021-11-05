const { updateItem } = require('../../services/articulos/updateItem')

async function ctrlUpdateItem(req, res){
  try{
    const { price, stock} = req.body
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const item = await updateItem(price, stock, _id)
    return res.status(200).send(item)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
}
module.exports = { ctrlUpdateItem }

