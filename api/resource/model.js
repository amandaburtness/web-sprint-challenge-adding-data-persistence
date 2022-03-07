// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
  return  db('resources')
}

const addResource = async (resource) => {
  return db('resources').insert(resource)
    .then(() => {
      return db('resources')
        .select('resources.resource_name')
        .first()
    })
}

module.exports = {
  getResources,
  addResource
}