const router = require('express').Router();
const db = require('../data/dbConfig')

const Categories = require('./categories-model')

router.get('/', async (req, res) => {
  try {
    const categories = await Categories.getCats()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({
      message: 'We ran into an error.'
    })
  }
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('categories')
    .where({ id })
    .first()
    .then(categories => {
      db('recipes')
        .where({ 'category_id': id })
        .then(recipes => {
          categories.recipes = recipes;
          return res.status(200).json(categories)
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'We ran into an error retrieving the categories.'
      })
    })
})

router.get('/:id/recipes', (req, res) => {
  db('categories')
    .join('recipes', 'categories.id', 'recipes.category_id')
    .where({ category_id: req.params.id })
    .select(
      { category: 'categories.name' },
      'recipes.name',
      'recipes.source'
    )
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(error => {
      res.status(500).json({
        message: 'We ran into an error retrieving the recipes.'
      })
    })
})

router.post('/', async (req, res) => {
  const cat = req.body
  if (cat.name) {
    try {
      const addedCat = await Categories.addCat(cat)
      res.status(201).json(addedCat)
    } catch (error) {
      res.status(500).json({
        message: 'Could not add the category'
      })
    }
  } else {
    res.status(400).json({
      message: 'Please provide the name of the category'
    })
  }
})

module.exports = router;