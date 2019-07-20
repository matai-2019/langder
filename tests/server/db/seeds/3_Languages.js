exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        { id: 1, name: 'japanese', countryCode: 'jp' },
        { id: 2, name: 'chinese', countryCode: 'ch' },
        { id: 3, name: 'english', countryCode: 'en' }
      ])
    })
}