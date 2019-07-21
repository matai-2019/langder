exports.up = (knex, Promise) => {
  return knex.schema.createTable('likes', table => {
    table.increments('id').primary()
    table.integer('userId').unsigned()
    table.integer('likedId').unsigned()
    table.foreign('userId').references('users.id')
    table.foreign('likedId').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('likes')
}
