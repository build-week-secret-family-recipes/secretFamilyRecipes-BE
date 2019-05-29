
exports.seed = function (knex, Promise) {
  return knex('recipes').insert([
    {
      name: 'Shrimp tacos',
      source: 'Cousin Juan',
      category_id: '1',
      instructions: 'Add together, eat.',
      ingredients: '6 corn tortillas, 1 lb. shrimp, 1 cup grated cheese, chopped tomatoes, shredded cabbage, salsa'
    },
    {
      name: 'Broccoli Casserole',
      source: 'Barb',
      category_id: '5',
      instructions: 'Add together, bake, eat.',
      ingredients: 'chopped broccoli, cooked rice, sliced red pepper, tamari, salt, black pepper'
    },
    {
      name: 'Chocolate Mirror Cake',
      source: 'Grandma Marge',
      category_id: '3',
      instructions: 'Add together, bake, eat.',
      ingredients: '2 cups of flour, baking powder, cocoa, melted cholcolate, eggs'
    },
    {
      name: 'Lasagna',
      source: 'Aunt Mary',
      category_id: '1',
      instructions: 'Add together, bake, eat.',
      ingredients: 'noodles, ricotta cheese, parmesan cheese, bolognese sauce'
    },
    {
      name: 'Barley Soup',
      source: 'Judy',
      category_id: '4',
      instructions: 'Add together, bake, eat.',
      ingredients: 'cooked barley, chopped vegies, vegie broth, minced garlic'
    },
    {
      name: 'Stuffed mushrooms',
      category_id: '2',
      instructions: 'Add together, bake, eat.',
      ingredients: 'large mushroom caps, dungeness crab meat, butter, minced onion, chopped parsley'
    }
  ]);
};
