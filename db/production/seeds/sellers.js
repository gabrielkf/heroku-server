const bcrypt = require('bcrypt');

exports.seed = async knex => {
  // creates hash for password '123456'
  const defaultPass = await bcrypt.hash('123456', 8);

  // Deletes ALL existing entries
  return knex('sellers')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('sellers').insert([
        {
          id: 1,
          name: 'Gabriel Paiva',
          email: 'gabrielkf@gmail.com',
          password_hash: defaultPass,
          cpf: '01937483398',
          score: 66,
          phone_area: 85,
          phone_number: 988441384,
          avatar_url:
            'https://avatars0.githubusercontent.com/u/46633617?s=460&u=eb81a98e97a0b6cc15e1d71ff4d4260e55e8aef6&v=4',
        },
        {
          id: 2,
          name: 'Francisco Martin',
          email: 'franciscoaugustomartin@gmail.com',
          password_hash: defaultPass,
          cpf: '01234567890',
          score: 77,
          phone_area: 48,
          phone_number: 984148578,
          avatar_url:
            'https://avatars1.githubusercontent.com/u/20363204?s=460&u=ea7b7c6b5d1b2f6b602ec3c543d39c9ccda64109&v=4',
        },
        {
          id: 3,
          name: 'Christian Kaisermann',
          email: 'christian@kaisermann.me',
          password_hash: defaultPass,
          cpf: '09876543210',
          score: 88,
          phone_area: 99,
          phone_number: 987654321,
          avatar_url:
            'https://avatars3.githubusercontent.com/u/12702016?s=460&u=ec2247694fca53917be8ca08bbf2d30eafb50e8e&v=4',
        },
      ]);
    });
};
