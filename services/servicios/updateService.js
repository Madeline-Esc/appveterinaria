const Services = require('../../models/service')

async function updateService(duration, price, _id){
  try{
    console.log('Hola desde el servicio')
    console.log(_id)
    const serviceUpdate = await Services.findOneAndUpdate(
      {_id},
      {duration, price},
      {new: true}
    )



    console.log(serviceUpdate)
    return serviceUpdate
}   catch(error){
    return {message: error.message}
}

}


module.exports = { updateService }
