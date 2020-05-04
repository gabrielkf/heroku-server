exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('clients')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('clients').insert([
        {
          id: 1,
          name: 'Gabriel Paiva',
          email: 'gabrielkf@gmail.com',
          avatar_url:
            'https://avatars0.githubusercontent.com/u/46633617?s=460&u=eb81a98e97a0b6cc15e1d71ff4d4260e55e8aef6&v=4',
        },
        {
          id: 2,
          name: 'Francisco Martin',
          email: 'franciscoaugustomartin@gmail.com',
          avatar_url:
            'https://avatars1.githubusercontent.com/u/20363204?s=460&u=ea7b7c6b5d1b2f6b602ec3c543d39c9ccda64109&v=4',
        },
        {
          id: 3,
          name: 'Christian Kaisermann',
          email: 'christian@kaisermann.me',
          avatar_url:
            'https://avatars3.githubusercontent.com/u/12702016?s=460&u=ec2247694fca53917be8ca08bbf2d30eafb50e8e&v=4',
        },
      ]);
    });
};
