exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        { id: 1, name: 'Mandarin', countryCode: 'cn' },
        { id: 2, name: 'Korean', countryCode: 'kr' },
        { id: 3, name: 'Maori', countryCode: 'nz' },
        { id: 4, name: 'Japanese', countryCode: 'jp' },
        { id: 5, name: 'Spanish', countryCode: 'es' }
      ])
    })
}
