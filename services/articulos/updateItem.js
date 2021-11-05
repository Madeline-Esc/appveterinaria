const Items = require('../../models/item')

async function updateItem(price, stock, _id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const itemUpdate = await Items.findOneAndUpdate(
      {_id},
      {price, stock},
      {new: true}
    )



    console.log(itemUpdate)
    return itemUpdate
}   catch(error){
    return {message: error.message}
}

}


module.exports = { updateItem }
