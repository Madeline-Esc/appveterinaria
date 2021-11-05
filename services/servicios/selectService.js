const Services = require('../../models/service')

async function selectService(_id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const item = !_id ? await Services.find() : await Services.find({_id})
    return item
}   catch(error){
    return {message: error.message}
}

}


module.exports = { selectService }
