
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    {
      name: 'Shrimp tacos',
      source: 'Cousin Juan',
      category_id: '1',
      instructions: 'Add together, eat.'
    },
    {
      name: 'Broccoli Casserole',
      source: 'Barb',
      category_id: '5',
      instructions: 'Add together, bake, eat.'
    },
    {
      name: 'Chocolate Mirror Cake',
      source: 'Grandma Marge',
      category_id: '3',
      instructions: 'Add together, bake, eat.'
    },
    {
      name: 'Lasagna',
      source: 'Aunt Mary',
      category_id: '1',
      instructions: 'Add together, bake, eat.'
    },
    {
      name: 'Barley Soup',
      source: 'Judy',
      category_id: '4',
      instructions: 'Add together, bake, eat.'
    },
    {
      name: 'Stuffed mushrooms',
      category_id: '2',
      instructions: 'Add together, bake, eat.'
    }
  ]);
};
