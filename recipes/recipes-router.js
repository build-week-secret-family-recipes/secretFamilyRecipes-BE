const router = require('express').Router()

const Recipes = require('./recipes-model')

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getAllRecipes()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({
      message: 'We ran into an error getting the recipes'
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipes.getRecipeByCat(req.params.id)
    if (recipe) {
      res.status(200).json(recipe)
    } else {
      res.status(404).json({
        message: 'We cannot find the recipe you requested'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "The server ran into an error getting the recipes"
    })
  }
})

router.post('/', async (req, res) => {
  const recipe = req.body;
  if (recipe.name) {
    try {
      const addedRec = await Recipes.addRecipe(recipe)
      res.status(201).json(addedRec)
    } catch (error) {
      res.status(500).json({
        message: 'Could not add the recipe'
      })
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name for the recipe'
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const count = await Recipes.removeRecipe(req.params.id)
    if (count > 0) {
      res.status(204).end()
    } else {
      res.status(404).json({
        message: 'That recipe does not exist, maybe it was deleted already'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'We ran into an error removing the recipe'
    })
  }
})

// router.put('/:id', async (req, res) => {

// })

module.exports = router;