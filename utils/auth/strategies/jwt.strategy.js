const {Strategy, ExtractJwt} = require('passport-jwt')
const { config } = require('../../../config/index')
const TOKEN = encodeURIComponent(config.Tok)

const options ={
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: TOKEN
}

const JwtStrategy = new Strategy(options, (payload, done)=>{
  return done(null, payload)
})

module.exports = JwtStrategy
