exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 1, userId: 1, name: 'test1' },
        { id: 2, userId: 2, name: 'test2' },
        { id: 3, userId: 3, name: 'test3' }
      ])
    })
}
