const { deleteItem } = require('../../services/articulos/deleteItem')

async function ctrlDeleteItem(req, res){
  try{
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const item = await deleteItem(_id)
    return res.status(200).send(item)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }


}
module.exports = { ctrlDeleteItem }

