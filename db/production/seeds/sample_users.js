exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('clients')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('clients').insert([
        {
          id: 1,
          name: 'Bruna Muniz de Andrade',
          email: 'brunaemail@gmail.com',
        },
        {
          id: 2,
          name: 'Mário Yoshi de Luigi',
          email: 'nintendorules@gmail.com',
        },
        {
          id: 3,
          name: 'Diego Fernandes',
          email: 'diego3g@rocketseat.com.br',
        },
      ]);
    });
};
