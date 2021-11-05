const Users = require('../../models/user')

async function createUser(name, lastName, phone, genero, email){
  try{
    const userCreated = await Users.create({
      name,
      lastName,
      phone,
      genre: genero,
      email
    })

    console.log(userCreated)
    return userCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createUser }
