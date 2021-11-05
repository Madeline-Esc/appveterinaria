const { deleteUser } = require('../../services/usuarios/deleteUser')

async function ctrlDeleteUser(req, res){
  try{
    const {email } = req.params
    console.log('Hola desde el controlador')
    const user = await deleteUser(email)
    return res.status(200).send(user)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
  //console.log('El género del usuario es', genre)
  //return res.status(200).send({ genero: genre == 'M' ? 'Femenino': 'Masculino' })

}
module.exports = { ctrlDeleteUser }

