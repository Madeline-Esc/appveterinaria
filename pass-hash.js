const bcrypt = require('bcrypt')

async function hashPassword(){
  const myPassword = 'vet 2122'
  const hash = await bcrypt.hash(myPassword, 10)
  console.log(hash)
}

hashPassword()
