exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries 
      return knex('profiles').insert([
        { id: 1, userId: 1, img: 1, name: 'Tina', description: 'Wants to learn everything' },
        { id: 2, userId: 2, img: 2, name: 'Gina', description: 'Here for free pie' },
        { id: 3, userId: 3, img: 3, name: 'Lina', description: 'I learn the good English you teach good' },
        { id: 4, userId: 4, img: 4, name: 'Zena', description: 'I do not know what to say. I am too shy' },
        { id: 5, userId: 5, img: 5, name: 'Nina', description: 'Is this a good way to learn?' },
        { id: 6, userId: 6, img: 6, name: 'Terry', description: 'I know a lot and can teach a lot for those that need help' },
        { id: 7, userId: 7, img: 7, name: 'Gerry', description: 'Do I have to delete "test description" in my bio? How yous all doing!' },
        { id: 8, userId: 8, img: 8, name: 'Merry', description: 'I was a teacher and love language exchanges' },
        { id: 9, userId: 9, img: 9, name: 'Lerry', description: 'I cannt spel so this is had' },
        { id: 10, userId: 10, img: 10, name: 'Rolly', description: 'I saw my firends on this and it looked neat' },
        { id: 11, userId: 11, img: 11, name: 'Trolly', description: 'I am just a typical online troll that needs to learn new words. Please help this horrib... disgus.... abhorr.... yucky troll' }
      ])
    })
}
