exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('stock')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('stock').insert([
        {
          id: 1,
          product_id: 1,
          amount: 3,
        },
        {
          id: 2,
          product_id: 2,
          amount: 5,
        },
        {
          id: 3,
          product_id: 3,
          amount: 2,
        },
        {
          id: 4,
          product_id: 4,
          amount: 1,
        },
        {
          id: 5,
          product_id: 5,
          amount: 5,
        },
        {
          id: 6,
          product_id: 6,
          amount: 10,
        },
      ]);
    });
};
