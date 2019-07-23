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
        { id: 11, email: 'email1@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 12, email: 'email2@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 13, email: 'email13@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 14, email: 'email4@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 15, email: 'email15@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 16, email: 'email16@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 17, email: 'email17@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 18, email: 'email18@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 19, email: 'email19@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 20, email: 'email20@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 21, email: 'email21@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 22, email: 'email22@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 23, email: 'email23email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 24, email: 'email24@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 25, email: 'email25@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 26, email: 'email26@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 27, email: 'email27@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 28, email: 'email28@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 29, email: 'email29@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' },
        { id: 30, email: 'email30@email.com', password: '$2b$10$fWmEfnYjhGXW2XTP//PcTupPqg7vZmoTU9Rt2LsqxRtAfNs9juV22' }
      ])
    })
}
