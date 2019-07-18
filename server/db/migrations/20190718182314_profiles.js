exports.up = function (knex) {
  return knex.schema.createTable('profiles', table => {
    table.increments('id').primary()
    table.string('name')
    table.integer('userId')
      .unsigned()
      .unique()
      .notNull()
    table.foreign('userId')
      .references('user.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('profiles')
}
