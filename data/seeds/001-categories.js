
exports.seed = function (knex, Promise) {
  return knex('categories').insert([
    { name: 'entree' }, // 1
    { name: 'appetizer' }, // 2
    { name: 'dessert' },  // 3
    { name: 'soup' },  // 4
    { name: 'vegan' }  // 5
  ]);
};
