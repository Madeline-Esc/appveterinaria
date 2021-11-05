const { updateService } = require('../../services/servicios/updateService')

async function ctrlUpdateService(req, res){
  try{
    const {duration, price} = req.body
    const {_id } = req.params
    console.log('Hola desde el controlador')
    const service = await updateService(duration, price, _id)
    return res.status(200).send(service)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
}
module.exports = { ctrlUpdateService }

