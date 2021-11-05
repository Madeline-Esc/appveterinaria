const Services = require('../../models/service')

async function deleteService(_id){
  try{
    const ServiceDeleted = await Services.deleteOne({_id})
    console.log(ServiceDeleted)
    if (ServiceDeleted.deletedCount == 0)
    return {ServiceDeleted: ServiceDeleted.deletedCount, message: 'Servicio no encontrado'}
    else return {ServiceDeleted: ServiceDeleted.deletedCount, message: 'Servicio eliminado con éxito'}
  }   catch(error){
    return {message: error.message}
  }

}


module.exports = { deleteService }
