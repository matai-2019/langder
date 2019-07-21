exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, email: 'email@email.com', password: 'password' },
        { id: 2, email: 'email2@email.com', password: 'password' },
        { id: 3, email: 'email3@email.com', password: 'password' }
      ])
    })
}
