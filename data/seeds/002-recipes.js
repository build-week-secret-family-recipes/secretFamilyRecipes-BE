
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    {
      name: 'Shrimp tacos',
      source: 'Cousin Juan',
      category_id: '1'
    },
    {
      name: 'Broccoli Casserole',
      source: 'Barb',
      category_id: '5'
    },
    {
      name: 'Chocolate Mirror Cake',
      source: 'Grandma Marge',
      category_id: '3'
    },
    {
      name: 'Lasagna',
      source: 'Aunt Mary',
      category_id: '1'
    },
    {
      name: 'Barley Soup',
      source: 'Judy',
      category_id: '4'
    },
    {
      name: 'Stuffed mushrooms',
      category_id: '2'
    }
  ]);
};
