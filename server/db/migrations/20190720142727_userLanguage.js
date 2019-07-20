exports.up = function (knex) {
  return knex.schema.createTable('userLanguages', table => {
    table.increments('id').primary()
    table.integer('profileId').unsigned().notNull()
    table.foreign('profileId')
      .references('profile.id')
      .onDelete('CASCADE')
    table.integer('langId').unsigned().notNull()
    table.foreign('langId')
      .references('languages.id')
      .onDelete('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('userLanguages')
}
