
exports.seed = function (knex, Promise) {
  return knex('recs_ingreds').insert([
    { recipe_id: 1, ingredient_id: 1 }, // 1
    { recipe_id: 1, ingredient_id: 2 }, // 2
    { recipe_id: 1, ingredient_id: 3 }, // 3
    { recipe_id: 1, ingredient_id: 4 }, // 4
    { recipe_id: 1, ingredient_id: 5 }, // 5
    { recipe_id: 1, ingredient_id: 6 }, // 6

    { recipe_id: 2, ingredient_id: 7 }, // 7
    { recipe_id: 2, ingredient_id: 8 }, // 8
    { recipe_id: 2, ingredient_id: 9 }, // 8
    { recipe_id: 2, ingredient_id: 10 }, // 9
    { recipe_id: 2, ingredient_id: 11 }, // 10
    { recipe_id: 2, ingredient_id: 12 }, // 10

    { recipe_id: 3, ingredient_id: 17 }, // 11
    { recipe_id: 3, ingredient_id: 18 }, // 12
    { recipe_id: 3, ingredient_id: 19 }, // 13
    { recipe_id: 3, ingredient_id: 20 }, // 14
    { recipe_id: 3, ingredient_id: 21 }, // 15
    { recipe_id: 3, ingredient_id: 9 }, // 16

    { recipe_id: 4, ingredient_id: 13 }, // 17
    { recipe_id: 4, ingredient_id: 14 }, // 17
    { recipe_id: 4, ingredient_id: 15 }, // 18
    { recipe_id: 4, ingredient_id: 16 }, // 19
    { recipe_id: 4, ingredient_id: 9 }, // 19
    { recipe_id: 4, ingredient_id: 10 }, // 19

    { recipe_id: 5, ingredient_id: 23 }, // 20
    { recipe_id: 5, ingredient_id: 24 }, // 21
    { recipe_id: 5, ingredient_id: 25 }, // 22
    { recipe_id: 5, ingredient_id: 26 }, // 23
    { recipe_id: 5, ingredient_id: 9 }, // 23
    { recipe_id: 5, ingredient_id: 10 }, // 23

    { recipe_id: 6, ingredient_id: 28 }, // 23
    { recipe_id: 6, ingredient_id: 29 }, // 23
    { recipe_id: 6, ingredient_id: 30 }, // 23
    { recipe_id: 6, ingredient_id: 31 }, // 23
    { recipe_id: 6, ingredient_id: 32 }, // 23
    { recipe_id: 6, ingredient_id: 10 }, // 23
  ]);
};
