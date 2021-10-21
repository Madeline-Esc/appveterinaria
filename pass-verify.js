const bcrypt = require('bcrypt')

async function verifyPassword(){
  const myPassword = 'vet 2122'
  const myPasswordHashed = '$2b$10$XrexSnlzWKkFnCmvsnwE1eX4GM2NV0fAinizp7GUGYVIkSe6uaOdK'
  const isMatch = await bcrypt.compare(myPassword, myPasswordHashed)
  console.log(isMatch)
}

verifyPassword()
