exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, email: 'email1@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 2, email: 'email2@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 3, email: 'email3@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 4, email: 'email4@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 5, email: 'email5@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 6, email: 'email6@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 7, email: 'email7@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 8, email: 'email8@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 9, email: 'email9@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 10, email: 'emai10@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 11, email: 'email11@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' }
      ])
    })
}
