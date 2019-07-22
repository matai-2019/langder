exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, email: 'email@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 2, email: 'email2@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 3, email: 'email3@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' }
      ])
    })
}
