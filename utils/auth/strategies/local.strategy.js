const { Strategy } = require('passport-local')
const bcrypt = require('bcrypt')

const LocalStrategy = new Strategy(
  async (email, password, done) => {
    try{
    const usersTest = [
      {name: 'Luis', email:'user1@mail.com', password: '$2b$10$xAGiCXCvzIS2QVO1LE2I3eX6dwInTPiXQ9M0QAymSMOkBkzbRJx0y', rol: 'user'},
      {name: 'Madeline', email:'admin@mail.com', password: '$2b$10$HPUbo2UNruaPNPqBCU1CWu3JonMug5MdIhDhgol83TQSGyL8eQ4nS', rol: 'admin'},
      {name: 'Rubén', email:'user2@mail.com', password: '$2b$10$W4lvavYHPpVvqQf/lqYv/.rBWjp4V9Vebdm4bc2G58qQ92BdQ6Kxu', rol: 'user'},
    ]
    const user = usersTest[1]
    if(!user) return done(null, null)
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw { status: 401, message: 'Acceso denegado', error:true }
    delete user.password
    done(null, user)
  } catch(error){
    done(error, false)
  }
}
)

module.exports = LocalStrategy
