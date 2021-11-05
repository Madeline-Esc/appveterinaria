const { updateSupplier } = require('../../services/proveedores/updateSupplier')

async function ctrlUpdateSupplier(req, res){
  try{
    const { name, phone} = req.body
    const {company } = req.params
    console.log('Hola desde el controlador')
    const supplier = await updateSupplier(name, phone, company)
    return res.status(200).send(supplier)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }


}
module.exports = { ctrlUpdateSupplier }

