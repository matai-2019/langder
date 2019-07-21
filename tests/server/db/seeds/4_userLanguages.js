exports.seed = function (knex) {
  return knex('userLanguages').del()
    .then(function () {
      return knex('userLanguages').insert([
        { id: 1, userId: 1, langId: 2 },
        { id: 2, userId: 1, langId: 3 },
        { id: 3, userId: 2, langId: 1 },
        { id: 4, userId: 2, langId: 2 }
      ])
    })
}
