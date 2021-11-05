const Sales = require('../../models/sale')

async function selectSale(_id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const item = !_id ? await Sales.find() : await Sales.find({_id})
    return item
}   catch(error){
    return {message: error.message}
}

}


module.exports = { selectSale }
