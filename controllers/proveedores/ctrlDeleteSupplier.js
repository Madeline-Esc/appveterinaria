const { deleteSupplier } = require('../../services/proveedores/deleteSupplier')

async function ctrlDeleteSupplier(req, res){
  try{
    const { company } = req.params
    console.log('Hola desde el controlador')
    const supplier = await deleteSupplier(company)
    return res.status(200).send(supplier)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }

}
module.exports = { ctrlDeleteSupplier }

