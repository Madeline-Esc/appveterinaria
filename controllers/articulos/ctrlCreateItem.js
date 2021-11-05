const { createItem } = require('../../services/articulos/createItem')

async function ctrlCreateItem(req, res){
  try{
    const { name, price, stock, description } = req.body
    console.log('Hola desde el controlador')
    const item = await createItem(name, price, stock, description)
    return res.status(200).send(item)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlCreateItem }

