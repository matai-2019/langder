exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('email')
    table.string('password')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
