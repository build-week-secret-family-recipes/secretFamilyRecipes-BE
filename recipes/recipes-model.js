const db = require('../data/dbConfig')

module.exports = {
  getAllRecipes,
  getRecipeById,
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
      },
      'recipes.source'
    )
}

function getRecipeById(id) {
  return db('recipes')
    .where({ 'recipes.id': id })
    .join('categories', 'recipes.category_id', 'categories.id')
    .join('ingredients', 'recipes.id', 'ingredients.id')
    .select(
      'recipes.id',
      'recipes.name',
      {
        category: 'categories.name'
      },
      'recipes.source',
      'recipes.instructions',
      { ingredient: 'ingredients.name' }
    )
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe, 'id')
}

function removeRecipe(id) {
  return db('recipes')
    .where({ id })
    .del()
}

function updateRecipe(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes)
}