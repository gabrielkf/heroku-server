exports.up = knex => {
  return knex.schema.createTable('stock', table => {
    table.increments('id').unique().primary();
    table
      .integer('product_id')
      .references('id')
      .inTable('products')
      .notNullable();
    table.integer('amount').notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable('stock');
};
