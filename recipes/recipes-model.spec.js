const db = require('../data/dbConfig');

const Recipes = require('./recipes-model')

describe('recipes model', () => {
  describe('removeRecipe()', () => {

    beforeEach(async () => {
      await db('recipes').truncate()
    })

    test('should remove the recipe from the db', async () => {
      await Recipes.addRecipe({ name: 'Chili' })
      const recipes = await db('recipes')
      expect(recipes).toHaveLength(1)

      await Recipes.removeRecipe(recipes[0].id)
      const deletedRecipes = await db('recipes')
      expect(deletedRecipes).not.toHaveLength(1)
    })
  })


  describe('addRecipe()', () => {

    beforeEach(async () => {
      await db('recipes').truncate()
    })

    test('should insert the provided recipe into the db', async () => {
      await Recipes.addRecipe({ name: 'Chili' })
      await Recipes.addRecipe({ name: 'Meatballs' })

      const recipes = await db('recipes')
      expect(recipes).toHaveLength(2)
    })

    test('should return the recipe id and name of the added recipe', async () => {
      let recipe = await Recipes.addRecipe({ name: 'Chili' })
      expect(recipe.id).toBe(1)
      expect(recipe.name).toBe('Chili')

      recipe = await Recipes.addRecipe({ name: 'Meatballs' })
      expect(recipe.name).toBe('Meatballs')
    })
  })


})
