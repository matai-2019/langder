exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, email: 'email@email.com', password: 'password' },
        { id: 2, email: 'email2@email.com', password: 'password' },
        { id: 3, email: 'email3@email.com', password: 'password' }
      ])
    })
}
