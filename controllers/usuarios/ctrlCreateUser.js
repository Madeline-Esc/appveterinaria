const { createUser } = require('../../services/usuarios/createUser')

async function ctrlCreateUser(req, res){
  try{
    const { name, lastName, phone, genero, email } = req.body
    console.log('Hola desde el controlador')
    const user = await createUser(name, lastName, phone, genero, email)
    return res.status(200).send(user)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
  //console.log('El género del usuario es', genre)
  //return res.status(200).send({ genero: genre == 'M' ? 'Femenino': 'Masculino' })

}
module.exports = { ctrlCreateUser }

