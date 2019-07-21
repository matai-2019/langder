exports.seed = function (knex) {
  return knex('matches').del()
    .then(function () {
      return knex('matches').insert([
        { id: 1, user1Id: 1, user2Id: 2 },
        { id: 2, user1Id: 1, user2Id: 3 },
        { id: 3, user1Id: 2, user2Id: 1 },
        { id: 4, user1Id: 3, user2Id: 1 }
      ])
    })
}
