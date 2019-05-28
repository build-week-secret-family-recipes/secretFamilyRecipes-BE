const db = require('../data/dbConfig')

module.exports = {
  getAllRecipes,
  getRecipeByCat,
  addRecipe,
  removeRecipe,
  updateRecipe
}

function getAllRecipes() {
  return db('recipes')
    .join('categories', 'recipes.category_id', 'categories.id')
    .select(
      'recipes.id',
      'recipes.name',
      {
        category: 'categories.name'
      }
    )
}

function getRecipeByCat(id) {
  return db('recipes')
    .where({ 'recipes.category_id': id })
    .join('categories', 'recipes.category_id', 'categories.id')
    .select(
      'recipes.id',
      'recipes.name',
      {
        category: 'categories.name'
      },
      'recipes.source',
      'recipes.instructions'
    )
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe, 'id')
}

function removeRecipe(id) {

}

function updateRecipe(id) {

}