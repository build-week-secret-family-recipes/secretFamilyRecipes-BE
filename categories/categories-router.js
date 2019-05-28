const router = require('express').Router();

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

router.get('/:id', async (req, res) => {
  try {
    const cat = await Categories.getCatById(req.params.id)
    if (cat) {
      res.status(200).json(cat)
    } else {
      res.status(404).json({
        message: 'Category not found'
      })
    }
  } catch (error) {
    res.status(500).json({
      message: 'We ran into an error retrieving the categories.'
    })
  }
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