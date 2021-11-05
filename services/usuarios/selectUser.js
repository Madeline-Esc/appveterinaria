const Users = require('../../models/user')

async function selectUser(genre){
  try{
    console.log('Hola desde el servicio')
    console.log(genre)
    /*let user
    if (!genre){
      user = await Users.find()
    }
    else{
      user = await Users.find({genre})
    }*/
    const user = !genre ? await Users.find() : await Users.find({genre})
    return user
}   catch(error){
    return {message: error.message}
}

}


module.exports = { selectUser }
