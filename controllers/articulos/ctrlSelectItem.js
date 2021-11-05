const { selectItem } = require('../../services/articulos/selectItem')

async function ctrlSelectItem(req, res){
  try{
    const { _id } = req.query
    console.log('Hola desde el controlador')
    const item = await selectItem(_id)
    return res.status(200).send(item)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlSelectItem }

