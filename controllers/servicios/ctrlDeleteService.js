const { deleteService } = require('../../services/servicios/deleteService')

async function ctrlDeleteService(req, res){
  try{
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const service = await deleteService(_id)
    return res.status(200).send(service)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }


}
module.exports = { ctrlDeleteService }

