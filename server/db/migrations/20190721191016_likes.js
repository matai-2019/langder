exports.up = (knex, Promise) => {
  return knex.schema.createTable('likes', table => {
    table.increments('id')
    table.integer('userId')
    table.integer('likedId')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('likes')
}
