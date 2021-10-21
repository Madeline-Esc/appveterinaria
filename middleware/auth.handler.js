const { config } = require('../config/index')
const API_KEY = encodeURIComponent(config.Key)

function checkApiKey(req, res, next){
  try{
     const apiKey = req.headers['api']
     if (apiKey == API_KEY) next()
     else throw { status: 401, message: 'No autorizado', error: true }
  }catch(error) {
  return res.status(error.status || 500).send({message: error.message})
 }
}

module.exports = { checkApiKey}

