const db = require('../data/dbConfig')

const Categories = require('./categories-model')

describe('categories model', () => {
  describe('addCat()', () => {

    beforeEach(async () => {
      await db('categories').truncate()
    })

    test('should add the category to the db', async () => {
      await Categories.addCat({ name: 'breads' })
      await Categories.addCat({ name: 'sides' })

      const categories = await db('categories')
      expect(categories).toHaveLength(2)
    })

    test('should return the name and id of the added category', async () => {
      let category = await Categories.addCat({ name: 'breads' })
      expect(category.name).toBe('breads')
      expect(category.id).toBe(1)
    })
  })

})
