
exports.seed = function (knex, Promise) {
  return knex('ingredients').insert([
    { name: 'corn tortillas' }, // 1
    { name: 'shrimp' }, // 2
    { name: 'grated cheese' }, // 3
    { name: 'chopped tomatoes' }, // 4
    { name: 'shredded cabbage' }, // 5
    { name: 'salsa' }, // 6

    { name: 'chopped broccoli' }, // 7
    { name: 'cooked rice' }, // 8
    { name: 'salt' }, // 9
    { name: 'black pepper' }, // 10
    { name: 'sliced red pepper' }, // 11
    { name: 'tamari' }, // 12

    { name: 'noodles' }, // 13
    { name: 'ricotta cheese' }, // 14
    { name: 'parmesan cheese' }, // 15
    { name: 'bolognese sauce' }, // 16

    { name: 'cup of flour' },  // 17
    { name: 'baking powder' },  // 18
    { name: 'cocoa' },  // 19
    { name: 'melted cholcolate' },  // 20
    { name: 'eggs' },  // 21

    { name: 'cooked barley' },  // 23
    { name: 'chopped vegies' },  // 24
    { name: 'vegie broth' },  // 25
    { name: 'minced garlic' },  // 26

    { name: 'large mushroom caps' },  // 28
    { name: 'dungeness crab meat' },  // 29
    { name: 'butter' },  // 30
    { name: 'minced onion' },  // 31
    { name: 'chopped parsley' }  // 32
  ]);
};
