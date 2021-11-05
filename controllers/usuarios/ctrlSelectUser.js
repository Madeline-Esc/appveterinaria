const { selectUser } = require('../../services/usuarios/selectUser')

async function ctrlSelectUser(req, res){
  try{
    const { genre } = req.query
    console.log('Hola desde el controlador')
    const user = await selectUser(genre)
    return res.status(200).send(user)
  }catch(error){
    return res.status(error.status || 500).send({message: error.message})
  }
  //console.log('El género del usuario es', genre)
  //return res.status(200).send({ genero: genre == 'M' ? 'Femenino': 'Masculino' })

}
module.exports = { ctrlSelectUser }

