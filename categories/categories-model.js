const db = require('../data/dbConfig')

module.exports = {
  getCats,
  getCatById,
  addCat
}

function getCats() {
  return db('categories')
}

function getCatById(id) {
  return db('categories')
    .where({ id })
    .first()
}

function addCat() {
  return db('categories').insert(category, 'id')
}