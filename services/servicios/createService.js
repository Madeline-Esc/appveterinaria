const Services = require('../../models/service')

async function createService(nameservice, duration, price){
  try{
    const serviceCreated = await Services.create({
      nameservice,
      duration,
      price,
    })

    console.log(serviceCreated)
    return serviceCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createService }
