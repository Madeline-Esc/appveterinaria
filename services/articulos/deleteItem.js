const Items = require('../../models/item')

async function deleteItem(_id){
  try{
    const ItemDeleted = await Items.deleteOne({_id})
    console.log(ItemDeleted)
    if (ItemDeleted.deletedCount == 0)
    return {ItemDeleted: ItemDeleted.deletedCount, message: 'Articulo no encontrado'}
    else return {ItemDeleted: ItemDeleted.deletedCount, message: 'Articulo eliminado con éxito'}
  }   catch(error){
    return {message: error.message}
  }

}


module.exports = { deleteItem }
