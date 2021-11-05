const { createSupplier } = require('../../services/proveedores/createSupplier')

async function ctrlCreateSupplier(req, res){
  try{
    const { name, company, phone } = req.body
    console.log('Hola desde el controlador')
    const supplier = await createSupplier(name, company, phone)
    return res.status(200).send(supplier)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }


}
module.exports = { ctrlCreateSupplier }

