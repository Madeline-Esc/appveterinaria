const Users = require('../../models/user')

async function deleteUser(email){
  try{
    const userDeleted = await Users.deleteOne({email})
    console.log(userDeleted)
    if (userDeleted.deletedCount == 0)
    return {userDeleted: userDeleted.deletedCount, message: 'Usuario no encontrado'}
    else return {userDeleted: userDeleted.deletedCount, message: 'Usuario eliminado con éxito'}
  }   catch(error){
    return {message: error.message}
  }

}


module.exports = { deleteUser }
