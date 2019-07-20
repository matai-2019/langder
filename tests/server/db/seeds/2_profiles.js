exports.seed = function (knex) {
  return knex('profiles').del()
    .then(function () {
      return knex('profiles').insert([
        { id: 1, name: 'A', userId: 1, description: 'I am A' },
        { id: 2, name: 'B', userId: 2, description: 'I am B' },
        { id: 3, name: 'C', userId: 3, description: 'I am C' }
      ])
    })
}
