exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        { id: 1, userId: 1, name: 'Mandarin', isKnown: true },
        { id: 2, userId: 2, name: 'Korean', isKnown: true },
        { id: 3, userId: 2, name: 'Maori', isKnown: false }
      ])
    })
}
