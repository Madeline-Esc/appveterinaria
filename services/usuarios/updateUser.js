const Users = require('../../models/user')

async function updateUser(name, lastName, phone, email){
  try{
    console.log('Hola desde el servicio')
    console.log(email)
    const userUpdated = await Users.findOneAndUpdate(
      {email},
      {name, lastName, phone},
      {new: true}
    )



    console.log(userUpdated)
    return userUpdated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { updateUser }
