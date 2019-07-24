exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([
        { id: 1, user1Id: 1, user2Id: 2 },
        { id: 2, user1Id: 1, user2Id: 3 }
      ])
    })
}
