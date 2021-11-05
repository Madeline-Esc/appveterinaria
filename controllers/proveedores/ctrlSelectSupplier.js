const { selectSupplier } = require('../../services/proveedores/selectSupplier')

async function ctrlSelectSupplier(req, res){
  try{
    const { company } = req.query
    console.log('Hola desde el controlador')
    const supplier = await selectSupplier(company)
    return res.status(200).send(supplier)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlSelectSupplier }

