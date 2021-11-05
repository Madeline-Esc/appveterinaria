const { createService } = require('../../services/servicios/createService')

async function ctrlCreateService(req, res){
  try{
    const { name, duration, price } = req.body
    console.log('Hola desde el controlador')
    const service = await createService(name, duration, price)
    return res.status(200).send(service)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlCreateService }

