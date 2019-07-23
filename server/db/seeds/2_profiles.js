exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        { id: 1, userId: 1, name: 'test1', description: 'test description' },
        { id: 2, userId: 2, name: 'test2', description: 'test description' },
        { id: 3, userId: 3, name: 'test3', description: 'test description' },
        { id: 4, userId: 4, name: 'test1', description: 'test description' },
        { id: 5, userId: 5, name: 'test2', description: 'test description' },
        { id: 6, userId: 6, name: 'test3', description: 'test description' },
        { id: 7, userId: 7, name: 'test1', description: 'test description' },
        { id: 8, userId: 8, name: 'test2', description: 'test description' },
        { id: 9, userId: 9, name: 'test3', description: 'test description' },
        { id: 10, userId: 10, name: 'test1', description: 'test description' },
        { id: 11, userId: 11, name: 'test2', description: 'test description' },
        { id: 12, userId: 12, name: 'test3', description: 'test description' },
        { id: 13, userId: 13, name: 'test1', description: 'test description' },
        { id: 14, userId: 14, name: 'test2', description: 'test description' },
        { id: 15, userId: 15, name: 'test3', description: 'test description' },
        { id: 16, userId: 16, name: 'test1', description: 'test description' },
        { id: 17, userId: 17, name: 'test2', description: 'test description' },
        { id: 18, userId: 18, name: 'test3', description: 'test description' },
        { id: 19, userId: 19, name: 'test1', description: 'test description' },
        { id: 20, userId: 20, name: 'test2', description: 'test description' },
        { id: 21, userId: 21, name: 'test3', description: 'test description' },
        { id: 22, userId: 22, name: 'test1', description: 'test description' },
        { id: 23, userId: 23, name: 'test2', description: 'test description' },
        { id: 24, userId: 24, name: 'test3', description: 'test description' },
        { id: 25, userId: 25, name: 'test1', description: 'test description' },
        { id: 26, userId: 26, name: 'test2', description: 'test description' },
        { id: 27, userId: 27, name: 'test3', description: 'test description' },
        { id: 28, userId: 28, name: 'test1', description: 'test description' },
        { id: 29, userId: 29, name: 'test2', description: 'test description' },
        { id: 30, userId: 30, name: 'test3', description: 'test description' }
      ])
    })
}
