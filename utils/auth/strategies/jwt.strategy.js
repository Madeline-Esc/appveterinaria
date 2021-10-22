const {Strategy, ExtractJwt} = require('passport-jwt')

const options ={
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'tN8aspBDQxKXP4lwUkZVGHg72czEvT1i'
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
})

module.exports = JwtStrategy
