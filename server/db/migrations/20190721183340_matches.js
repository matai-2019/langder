exports.up = (knex, Promise) => {
  return knex.schema.createTable('matches', table => {
    table.increments('id')
    table.string('user1Id')
    table.string('user2Id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('matches')
}
