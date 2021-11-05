const { selectService } = require('../../services/servicios/selectService')

async function ctrlSelectService(req, res){
  try{
    const { _id } = req.query
    console.log('Hola desde el controlador')
    const service = await selectService(_id)
    return res.status(200).send(service)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlSelectService }

