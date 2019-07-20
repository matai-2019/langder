exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('userLanguages').del()
    .then(function () {
      // Inserts seed entries
      return knex('userLanguages').insert([
        { id: 1, userId: 1, langId: 2 },
        { id: 2, userId: 2, langId: 1 },
        { id: 3, userId: 3, langId: 2 }
      ])
    })
}
