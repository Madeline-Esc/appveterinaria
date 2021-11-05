const Items = require('../../models/item')

async function selectItem(_id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const item = !_id ? await Items.find() : await Items.find({_id})
    return item
}   catch(error){
    return {message: error.message}
}

}


module.exports = { selectItem }
