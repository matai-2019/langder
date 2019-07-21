exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('userLanguages').del()
    .then(function () {
      // Inserts seed entries
      return knex('userLanguages').insert([
        { id: 1, userId: 1, likedId: 2 },
        { id: 2, userId: 1, likedId: 3 },
        { id: 3, userId: 2, likedId: 3 },
        { id: 4, userId: 3, likedId: 1 }
      ])
    })
}
