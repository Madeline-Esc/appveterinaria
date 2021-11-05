const Items = require('../../models/item')

async function createItem(name, price, stock, description){
  try{
    const itemCreated = await Items.create({
      name,
      price,
      stock,
      description
    })


    console.log(itemCreated)

    return itemCreated
}   catch(error){
    return {message: error.message}
}

}


module.exports = { createItem }
