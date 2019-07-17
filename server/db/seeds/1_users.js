
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, email: 'email@email.com', password: 'password'},
        {id: 2, email: 'email2@email.com', password: 'password'},
        {id: 3, email: 'email3@email.com', password: 'password'}
      ]);
    });
};
