exports.up = (knex, Promise) => {
  return knex.schema.createTable('matches', table => {
    table.increments('id').primary()
    table.integer('user1Id').unsigned()
    table.integer('user2Id').unsigned()
    table.foreign('user1Id')
      .references('likes.userId')
      .onDelete('CASCADE')
    table.foreign('user2Id')
      .references('likes.likedId')
      .onDelete('CASCADE')
    table.unique(['user1Id', 'user2Id'])
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('matches')
}
