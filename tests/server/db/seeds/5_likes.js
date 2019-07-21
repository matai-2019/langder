exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        { id: 1, userId: 1, likedId: 2 },
        { id: 2, userId: 2, likedId: 1 },
        { id: 3, userId: 3, likedId: 1 },
        { id: 4, userId: 3, likedId: 2 }
      ])
    })
}
